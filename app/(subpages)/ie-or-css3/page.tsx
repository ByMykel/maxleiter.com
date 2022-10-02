import supabase from '@lib/supabase/private'
import IeOrCss from '@components/ie-or-css'
import { experimental_use as use } from 'react'

const fetchQuestions = async () => {
  let { data, error } = await supabase.from('Questions').select('id,question')

  if (error || !data) {
    console.error(error)
    return []
  }

  const randomized = data.sort(() => Math.random() - 0.5)
  return randomized
}

const IeQuiz = () => {
  const questions = use(fetchQuestions())
  return (
    // <Page
    //   title="IE or CSS3?"
    //   description="A short quiz wondering if given code snippers are for internet explorer or CSS3"
    // >
    <IeOrCss questions={questions} />
    // </Page>
  )
}

export default IeQuiz

