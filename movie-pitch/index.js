import { process } from '/env'
import OpenAI from 'openai';


const setupTextarea = document.getElementById('setup-textarea') 
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

const apiKey = process.env.OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: apiKey, 
  dangerouslyAllowBrowser: true
});

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`
    fetchBotReply()
  }
})

async function fetchBotReply() 
{

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Sound enthusiastic in just five words' }],
    model: 'gpt-3.5-turbo',
  });

  movieBossText.innerText = chatCompletion.choices[0].message.content
}

