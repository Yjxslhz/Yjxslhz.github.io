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

		setTimeout(function() {
			sendMessage('嘿，生日快乐，遇见你是我这辈子最美的意外:)', 'left');
		}, 0);
		setTimeout(function() {
			sendMessage("春节快乐，蛮有趣的哈哈哈", 'right');
		}, 1500);
		setTimeout(function() {
			sendMessageImage('https://img2.baidu.com/it/u=2790055415,2503563551&fm=253&fmt=auto&app=120&f=JPEG?w=518&h=500', 'left');
		}, 3000);
		setTimeout(function() {
			return sendMessage('想要男人', 'right');
		}, 4500);
		setTimeout(function() {
			return sendMessage('来男人！！哈哈哈哈哈', 'left');
		}, 6000);
		setTimeout(function() {
			return sendMessageImage("https://s2.loli.net/2024/03/14/HW6iUATzo4tQOwm.jpg", 'left');
		}, 8000);
		setTimeout(function() {
			return sendMessage('谢谢，我需要是男人，不需要骚男人，谢谢。#、¥€π•π，不需要啦。', 'right');
		}, 9000);
		setTimeout(function() {
			return sendMessage('$%^*!$^& 请补全，有奖竞猜哦', 'right');
		}, 11000);
		setTimeout(function() {
			return sendMessage('转发来了消息......', 'left');
		}, 13000);
		setTimeout(function() {
			return sendMessage('好奇', 'right');
		}, 14500);
		setTimeout(function() {
			return sendMessage('男生zw频率', 'right');
		}, 16000);
		setTimeout(function() {
			return sendMessageImage('https://s21.ax1x.com/2024/03/14/pFcHgO0.jpg', 'right');
		}, 17500);
		setTimeout(function() {
			return sendMessage('你先说你的！我也好奇！', 'left');
		}, 19000);
		setTimeout(function() {
			return sendMessage('#$%^&&^%$，留点面子啦', 'right');
		}, 20500);
		setTimeout(function() {
			return sendMessage("(●'◡'●)有你真好!", 'left');
		}, 22000);
	});
})();
