const axios = require('axios')
axios.post('https://api.together.xyz/inference', {
  "model": "togethercomputer/llama-2-7b-chat",
  "max_tokens": 512,
  "prompt": "",
  "request_type": "language-model-inference",
  "temperature": 0.7,
  "top_p": 0.7,
  "top_k": 50,
  "repetition_penalty": 1,
  "stream_tokens": true
}, {
  headers: {
    Authorization: 'Bearer fc396a35719430892d52186af7347671bf98f4f33d90bd73078f7dc4001e672d'
  }    
}).then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});