document.getElementById('valentine_button').addEventListener('click', () => {
    const recipient = document.getElementById('valentine_name').value
    const message = document.getElementById('valentine_text').value
    document.getElementById('recipient').innerText = recipient
    document.getElementById('message').innerText = message
})
