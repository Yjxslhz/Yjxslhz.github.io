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

			sendMessage('亲爱的苗苗:)','left');
			setTimeout(function() {
				return sendMessage("生日快乐！！！。●'◡'●)", 'left');
			}, 2000);
			setTimeout(function() {
				return sendMessage('宝贝生日快乐，猪宝贝你一切都好！','left');
			}, 4000);
			setTimeout(function() {
				return sendMessage('希望所有俗套的祝福都在你身上灵验','left');
			}, 6000);
			setTimeout(function() {
				return sendMessage('新的一岁我希望我们可以一直在一起，分享生活的喜怒哀乐！', 'right');
			}, 8000);
			setTimeout(function() {
				return sendMessage('我希望我们的爱情可以像酒一样，越陈越香。无论未来发生什么，我都会坚定地与你站在一起！', 'right');
			}, 10000);
			setTimeout(function() {
				return sendMessage('宝贝，我要告诉你，我爱你。', 'left');
			}, 12000);
			setTimeout(function() {
				return sendMessage('希望一层又一层的糖霜落在你的人生，这样就算有苦味也能嚼得轻巧', 'left');
			}, 14000);
			setTimeout(function() {
				return sendMessage('祝你拈枝折杏沿途所遇皆是天晴，一路繁花似锦，成为三月最亮的启明星','left');
			}, 16000);
			setTimeout(function() {
				return sendMessage("(●'◡'●)生日快乐，如春添雨！", 'right');
			}, 18000);
			setTimeout(function() {
				return sendMessage('该许愿了宝', 'left');
			}, 20000);
			setTimeout(function() {
				return sendMessage('生日快乐宝贝！！！永远开心快乐，健康平安！', 'left');
			}, 21500);
			setTimeout(function() {
				return sendMessage('那就浅浅祝我生日快乐啦', 'right');
			}, 23000);
			return setTimeout(function() {
				return sendMessage("我很感激我们的相遇。在我心中，你比任何人都更重要。我永远爱你!(●'◡'●)", 'left');
			}, 24500);
		});

	}).call(this);