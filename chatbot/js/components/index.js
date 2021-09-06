function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

include('./chatbot/js/components/chat.js');
include('./chatbot/js/constants.js');
include('./chatbot/js/components/cardsCarousel.js');
include('./chatbot/js/components/botTyping.js');
include('./chatbot/js/components/charts.js');
include('./chatbot/js/components/collapsible.js');
include('./chatbot/js/components/dropDown.js');
include('./chatbot/js/components/location.js');
include('./chatbot/js/components/pdfAttachment.js');
include('./chatbot/js/components/quickReplies.js');
include('./chatbot/js/components/suggestionButtons.js');
