document.addEventListener('DOMContentLoaded', function () {
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbot = document.querySelector('.chatbot');
    const closeBtn = document.querySelector('.close-btn');
    const sendBtn = document.getElementById('send-btn');
    const textarea = document.querySelector('.chat-input textarea');

    // Toggle chatbot visibility
    chatbotToggler.addEventListener('click', function () {
        document.body.classList.toggle('show-chatbot');
    });

    // Close chatbot
    closeBtn.addEventListener('click', function () {
        document.body.classList.remove('show-chatbot');
    });

    // Send message
    sendBtn.addEventListener('click', function () {
        sendMessage();
    });

    // Handle enter key to send message
    textarea.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Function to send a message
    function sendMessage() {
        const message = textarea.value.trim();
        if (message !== '') {
            const chatbox = document.querySelector('.chatbox');
            const newMessage = document.createElement('li');
            newMessage.className = 'chat outgoing';
            newMessage.innerHTML = `
                <p>${message}</p>
            `;
            chatbox.appendChild(newMessage);
            // Simulate bot response after a short delay
            setTimeout(() => {
                handleBotResponse(message);
            }, 500);
            textarea.value = '';
            textarea.style.height = '55px'; // Reset textarea height
            textarea.dispatchEvent(new Event('input')); // Trigger input event for validation
        }
    }

    // Function to handle bot responses
    function handleBotResponse(userMessage) {
        const chatbox = document.querySelector('.chatbox');
        const newMessage = document.createElement('li');
        newMessage.className = 'chat incoming';
        let botResponse = getBotResponse(userMessage);
        newMessage.innerHTML = `
            <span class="material-symbols-outlined">smart_toy</span>
            <p>${botResponse}</p>
        `;
        chatbox.appendChild(newMessage);
    }

// Function to get bot responses based on user input
function getBotResponse(userMessage) {
    // Convert user input to lowercase for case-insensitive matching
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return "Hello! How can I assist you with your travel plans today? (destinations , branches , travel guides , customer reviews , awards)";
    } else if (lowerCaseMessage.includes('destination') || lowerCaseMessage.includes('popular')) {
        return "We offer exciting travel packages to popular destinations like Paris, Bangkok, Maldives, Greece, London, Julian Alps, Thailand, and Singapore. Which destination are you interested in?";
    } else if (lowerCaseMessage.includes('paris')) {
        return "Paris is a beautiful city known for its romantic ambiance and iconic landmarks like the Eiffel Tower. Our package for Paris includes a 3-day, 4-night stay starting from $1650 per person on twin sharing. What specific information would you like to know about Paris?(branches , travel guides , customer reviews , awards)";
    } else if (lowerCaseMessage.includes('bangkok')) {
        return "Bangkok is a vibrant city with a mix of modern and traditional attractions. Our package for Bangkok includes a 3-day, 4-night stay starting from $1850 per person on twin sharing. How can I help you plan your trip to Bangkok?(branches , travel guides , customer reviews , awards)";
    } else if (lowerCaseMessage.includes('maldives')) {
        return "The Maldives is a tropical paradise with stunning beaches and clear blue waters. Our package for the Maldives includes a 3-day, 4-night stay starting from $1350 per person on twin sharing. What specific details do you want to know about the Maldives?(branches , travel guides , customer reviews , awards)";
    } else if (lowerCaseMessage.includes('greece')) {
        return "Greece is known for its rich history and beautiful landscapes. Our package for Greece includes a 3-day, 4-night stay starting from $1650 per person on twin sharing. How can I assist you with your trip to Greece?(branches , travel guides , customer reviews , awards)";
    } else if (lowerCaseMessage.includes('london')) {
        return "London, the capital of the United Kingdom, is a city steeped in history and culture. Our package for London includes a 3-day, 4-night stay starting from $1750 per person on twin sharing. What specific information are you looking for about London?(branches , travel guides , customer reviews , awards)";
    } else if (lowerCaseMessage.includes('julian alps')) {
        return "The Julian Alps offer breathtaking natural beauty and outdoor adventures. Our package for Julian Alps includes a 3-day, 4-night stay starting from $1950 per person on twin sharing. How can I help you plan your trip to the Julian Alps?(branches , travel guides , customer reviews , awards)";
    } else if (lowerCaseMessage.includes('thailand')) {
        return "Thailand is known for its vibrant culture, beautiful beaches, and delicious cuisine. Our package for Thailand includes a 3-day, 4-night stay starting from $1750 per person on twin sharing. What specific details would you like to know about Thailand?(branches , travel guides , customer reviews , awards)";
    } else if (lowerCaseMessage.includes('singapore')) {
        return "Singapore, a modern metropolis, offers a blend of cultural experiences and futuristic attractions. Our package for Singapore includes a 3-day, 4-night stay starting from $1950 per person on twin sharing. How can I assist you with your trip to Singapore?(branches , travel guides , customer reviews , awards)";
    }

        else if (lowerCaseMessage.includes('branch') || lowerCaseMessage.includes('branches')) {
            return "We have 730 branches worldwide to assist you.";
        } else if (lowerCaseMessage.includes('guide')) {
            return "Our team of 1680 experienced travel guides is ready to make your journey memorable.";
        } else if (lowerCaseMessage.includes('happy') || lowerCaseMessage.includes('customer') || lowerCaseMessage.includes('review')) {
            return "We are proud to have 812 happy customers. Check out what they have to say about their travel experiences on our testimonials page.";
        } else if (lowerCaseMessage.includes('award')) {
            return "We have received numerous awards for our outstanding travel services. Thank you for considering us for your next adventure!";
        }



     else {
        return "I'm sorry, I didn't understand that. Feel free to ask about destinations, branches, travel guides, happy customers, or any other travel-related questions!";
    }
}



});
