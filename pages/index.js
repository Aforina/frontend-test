import Head from 'next/head'

export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div class='chat-notification'>
        <div class='chat-notification-logo-wrapper'>
          <img src='/public/alessio.jpg' alt='Alessio Muganni' />
        </div>
        <div class='chat-notification-content'>
          <h4 class='chat-notification-title'>ChitChat</h4>
          <p class='chat-notification-message'>You have a new message!</p>
        </div>
      </div>
    </div>
  )
}
