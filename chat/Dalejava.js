function chat(){

  var chat = {
    messageToSend: '',
    messageResponses: [
      'Ok. Just so you know we are doing arms today.',
      'Ok. Just so you know we are doing legs today.',
      'Ok. Just so you know we are doing chest today.',
      'Ok. Just so you know we are doing cardio today.',
      'Ok. Just so you know we Alex will be coming.',
      'Ok. Just so you know we Alex and Ryan will be today.'
    ],
    init: function() {
      this.cacheDOM();
      this.bindEvents();
      this.render();
    },
    cacheDOM: function() {
      this.$chatHistory = $('#messages');
      this.$button = $('button');
      this.$input = $('#message-to-send');
      this.$chatHistoryList =  this.$chatHistory.find('input');
    },
    bindEvents: function() {
      this.$button.on('click', this.addMessage.bind(this));
      this.$input.on('keyup', this.addMessageEnter.bind(this));
    },
    render: function() {
      this.scrollToBottom();
      if (this.messageToSend.trim() !== '') {
        var template = Handlebars.compile( $("#message-template").html());
        var context = {
          messageOutput: this.messageToSend,
          time: this.getCurrentTime()
        };

        this.$chatHistoryList.append(template(context));
        this.scrollToBottom();
        this.$input.val('');

        // responses
        var templateResponse = Handlebars.compile( $("#message-response-template").html());
        var contextResponse = {
          response: this.getRandomItem(this.messageResponses),
          time: this.getCurrentTime()
        };

        setTimeout(function() {
          this.$chatHistoryList.append(templateResponse(contextResponse));
          this.scrollToBottom();
        }.bind(this), 1500);

      }

    },

    addMessage: function() {
      this.messageToSend = this.$input.val();
      this.render();
    },
    addMessageEnter: function(event) {
      // enter was pressed
      if (event.keyCode === 13) {
        this.addMessage();
      }
    },
    scrollToBottom: function() {
      this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
    },
    getCurrentTime: function() {
      return new Date().toLocaleTimeString().
      replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    },
    getRandomItem: function(arr) {
      return arr[Math.floor(Math.random()*arr.length)];
    }

  };

  chat.init();}
