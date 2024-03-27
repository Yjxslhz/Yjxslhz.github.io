(function() {
	var Message;

	Message = function(arg) {
		this.text = arg.text, this.message_side = arg.message_side;
		this.draw = (function(_this) {
			return function() {
				var $message;
				$message = $($('.message_template').clone().html());
				$message.addClass(_this.message_side).find('.text').html(_this.text);
				$('.messages').append($message);
				return setTimeout(function() {
					return $message.addClass('appeared');
				}, 0);
			};
		})(this);
		return this;
	};

	$(function() {
		var getMessageText, sendMessage, sendMessageImage;
		//message_side = 'right';
		getMessageText = function() {
			var $message_input;
			$message_input = $('.message_input');
			return $message_input.val();
		};
		sendMessage = function(text, side) {
			var message, $messages;
			$messages = $('.messages'); // Add this line to declare and assign $messages variable
			message = new Message({
				text: text,
				message_side: side
			});
			message.draw();
			return $messages.animate({
				scrollTop: $messages.prop('scrollHeight')
			}, 300);
		};
		sendMessageImage = function(url, side) {
			var $messages, message;
			$messages = $('.messages');
			message = new Message({
				text: "<img src='" + url + "' width='50%' height='50%'/>",
				message_side: side
			});
			message.draw();
			return $messages.animate({
				scrollTop: $messages.prop('scrollHeight')
			}, 300);
		};

		$('.send_message').click(function(e) {
			return sendMessage(getMessageText());
		});
		$('.message_input').keyup(function(e) {
			if (e.which === 13) {
				return sendMessage(getMessageText());
			}
		});

			sendMessage('我来解释什么叫做赌怪苗', 'left');
			setTimeout(function() {
				return sendMessage('转发来了消息......', 'left');
			}, 1500);
			setTimeout(function() {
				return sendMessage('俺要JK', 'left');
			}, 3000);
			setTimeout(function() {
				return sendMessage('满足满足必须满足', 'right');
			}, 4500);
			setTimeout(function() {
				return sendMessage('jk加黑丝一次性满足你', 'right');
			}, 6000);
			setTimeout(function() {
				return sendMessage('爱了爱了', 'left');
			}, 7500);
			setTimeout(function() {
				return sendMessage('*发来了语音，%……&小狗￥%……', 'right');
			}, 9000);
			setTimeout(function() {
				return sendMessage('敢不敢和我打赌，就赌小狗会不会和好，正好KFC Crazy 星期四，你懂的）', 'left');
			}, 10500);
			setTimeout(function() {
				return sendMessage('（某人痛失50块）', 'right');
			}, 13000);
			setTimeout(function() {
				return sendMessage('明天有你快递，仙女棒', 'left');
			}, 14500);
			setTimeout(function() {
				return sendMessage("超强振动款！", 'left');
			}, 16000);
			setTimeout(function() {
				return sendMessage("大哥，我求你了，你别吓我，我害怕",'right');
			}, 17500);
			setTimeout(function() {
				return sendMessage("好家伙，幸亏不是奇怪的东西，你真的要发奇怪的东西，我要，我要吓死了",'right');
			}, 19000);
			setTimeout(function() {
				return sendMessage("哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",'left');
			}, 21000);
			return setTimeout(function() {
				return sendMessage("巧克力好吃吗？",'left');
			}, 23000);
	
		});

	}).call(this);