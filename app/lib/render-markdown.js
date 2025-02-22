import { marked } from 'marked'

import Image from 'next/image'
// import { format } from "prettier/standalone";
// delete defaultProps.theme

import linkStyles from '@components/link/link.module.css'
import Link from '@components/link'

const renderer = new marked.Renderer()

// const componentExtension = {
//   extensions: [{
//     name: 'component',
//     start(src) { return src.match(/<com/)?.index; },  // First characters of your token so Marked.js knows to stop and check for a match
//     level: 'block',        // Is this a block-level or inline-level tokenizer?
//     tokenizer(src, tokens) {
//       const rule = /^<component([^>]*)\/>/;  // Regex for the complete token
//       const match = rule.exec(src);
//       if (match) {
//         return {                          // Token to generate
//           type: 'component',                // Should match "name" above
//           raw: match[0],                    // The text that you want your token to consume from the source
//           text: match[1].trim()             // Any custom properties you want the Renderer to access
//         };
//       }
//     },
//     renderer (token) {
//       const type = token.text.split(' ').filter((t) => t.includes('type=')).pop().replace('type=', '').replaceAll('\'', '')
//       console.log(token, type)
//       switch (type) {
//         case 'socials':
//           console.log('socials', <Socials />)
//           return <Socials />
//         default:
//           return <div>Unknown component</div>
//       }
//     }
//   }]
// };

// marked.use(componentExtension)

const footnoteMatch = /^\[\^([^\]]+)\]:([\s\S]*)$/
const referenceMatch = /\[\^([^\]]+)\](?!\()/g
const referencePrefix = 'ref'
const footnotePrefix = 'note'
const footnoteTemplate = (ref, text) => {
  return (
    <>
      <span id={`${footnotePrefix}:${ref}`}>${ref}</span>
      {text}
    </>
  )
}

const referenceTemplate = (ref) => {
  return (
    <sup id={`${referencePrefix}:${ref}`}>
      <Link
        href={`#${footnotePrefix}:${ref}`}
        // as={`#${footnotePrefix}:${ref}`}
        className={linkStyles.link}
      >
        {ref}
      </Link>
    </sup>
  )
}
const interpolateReferences = (text) => {
  return text.replace(referenceMatch, (_, ref) => {
    return referenceTemplate(ref)
  })
}
const interpolateFootnotes = (text) => {
  console.log('interpolateFootnotes', text)
  return text.replace(footnoteMatch, (_, value, text) => {
    return footnoteTemplate(value, text)
  })
}

renderer.paragraph = (text) => {
  console.log('renderer.paragraph', text)
  return marked.Renderer.prototype.paragraph.apply(null, [
    interpolateReferences(interpolateFootnotes(text)),
  ])
}

renderer.text = (text) => {
  console.log('renderer.text', text)
  return marked.Renderer.prototype.text.apply(null, [
    interpolateReferences(interpolateFootnotes(text)),
  ])
}

renderer.heading = (text, level, raw, slugger) => {
  const id = slugger.slug(text)
  const Component = `h${level}`

  return (
    <Component>
      <Link href={`#${id}`} id={id}>
        {text}
      </Link>
    </Component>
  )
}

renderer.link = (href, _, text) => {
  const isHrefLocal = href.startsWith('/') || href.startsWith('#')
  if (isHrefLocal) {
    return (
      <Link href={href} className={linkStyles.link}>
        {text}
      </Link>
    )
  }
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkStyles.link}
    >
      {text}
    </Link>
  )
}

renderer.image = function (href, title, text) {
  return <Image loading="lazy" src={href} alt={text} layout="fill" />
}

renderer.checkbox = () => ''
renderer.listitem = (text, task, checked) => {
  if (task) {
    return (
      <li className="reset">
        <span className="check">
          &#8203;
          <input type="checkbox" disabled checked={checked} />
        </span>
        {text}
      </li>
    )
  }

  return <li>{text}</li>
}

renderer.code = (code, options) => {
  const opts = options.split(' ').map((o) => o.trim())
  const language = opts[0]
  const highlight = opts
    .filter((o) => o.startsWith('highlight='))
    .pop()
    ?.replace('highlight=', '')
    .trim()
  const raw = options.includes('raw')

  const title = opts
    .filter((o) => o.startsWith('title='))
    .pop()
    ?.replace('title=', '')
    .trim()

  const collapsible = options.includes('collapsible')

  // Touch it up with Prettier
  let formattedCode = code

  if (!raw) {
    try {
      // formattedCode = format(code, {
      //   semi: false,
      //   singleQuote: true,
      //   parser: language === 'jsx' || language === 'jsx' ? 'babel' : language,
      // })
    } catch (e) {} // Don't really mind if it fails
  }

  if (collapsible) {
    return (
      <details>
        {title && <summary>{title}</summary>}
        <pre>
          <Code
            language={language}
            title={title}
            code={formattedCode}
            highlight={highlight}
          />
        </pre>
      </details>
    )
  }

  return (
    <pre>
      {title && <code>{title}</code>}
      {language && title && <code style={{ float: 'right' }}>{language}</code>}
      {title && language && <hr />}
      <Code
        language={language}
        title={title}
        code={formattedCode}
        highlight={highlight}
      />
    </pre>
  )
}

// marked.setOptions({
//   gfm: true,
//   breaks: true,
//   headerIds: true,
//   // renderer,
// })

const markdown = (markdown) => marked(markdown)

export default markdown

const Code = ({ code, language, highlight, title, ...props }) => {
  // if (!language)
  return (
    <>
      <code {...props} dangerouslySetInnerHTML={{ __html: code }} />
    </>
  )

  // const highlightedLines = highlight
  //   ? highlight.split(',').reduce((lines, h) => {
  //       if (h.includes('-')) {
  //         // Expand ranges like 3-5 into [3,4,5]
  //         const [start, end] = h.split('-').map(Number)
  //         const x = Array(end - start + 1)
  //           .fill()
  //           .map((_, i) => i + start)
  //         return [...lines, ...x]
  //       }

  //       return [...lines, Number(h)]
  //     }, [])
  //   : []

  // https://mdxjs.com/guides/syntax-harkedighlighting#all-together
  // return (
  //   <>
  //     <Highlight {...defaultProps} code={code.trim()} language={language}>
  //       {({ className, style, tokens, getLineProps, getTokenProps }) => (
  //         <code className={className} style={{ ...style }}>
  //           {tokens.map((line, i) => (
  //             <div
  //               key={i}
  //               {...getLineProps({ line, key: i })}
  //               style={
  //                 highlightedLines.includes(i + 1)
  //                   ? {
  //                       background: 'var(--highlight)',
  //                       margin: '0 -1rem',
  //                       padding: '0 1rem',
  //                     }
  //                   : null
  //               }
  //             >
  //               {line.map((token, key) => (
  //                 <span key={key} {...getTokenProps({ token, key })} />
  //               ))}
  //             </div>
  //           ))}
  //         </code>
  //       )}
  //     </Highlight>
  //   </>
  // )
}
