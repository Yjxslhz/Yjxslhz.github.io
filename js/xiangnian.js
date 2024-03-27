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

			sendMessageImage('https://s2.loli.net/2024/03/14/jUDHYnO4y5Ccx2g.jpg','left');
			setTimeout(function() {
				return sendMessageImage("https://s21.ax1x.com/2024/03/14/pFcHbOx.jpg", 'left');
			}, 1500);
			setTimeout(function() {
				return sendMessage('你手机里面屌图是一张一张','right');
			}, 3000);
			setTimeout(function() {
				return sendMessage('哦，抱歉，不是一张一张是一沓一沓是吧？','right');
			}, 4500);
			setTimeout(function() {
				return sendMessage('冤枉!','left');
			}, 6000);
			setTimeout(function() {
				return sendMessage('考研加油！！我相信你，你是最棒的','right');
			}, 7500);
			setTimeout(function() {
				return sendMessage('比心','left');
			}, 9000);
			setTimeout(function() {
				return sendMessage('我辞职了，我要回来了，就在#￥%','right');
			}, 10500);
			setTimeout(function() {
				return sendMessage('我去机场接你，给你接风，请你吃大餐','left');
			}, 12500);
			setTimeout(function() {
				return sendMessage('哈哈哈，采访一下收到花什么心情呀，这个花，是我看着花语挑的','left');
			}, 15000);
			setTimeout(function() {
				return sendMessage('♥','right');
			}, 17000);
			setTimeout(function() {
				return sendMessage("那我们现在算什么关系呀？",'left');
			}, 19000);
			setTimeout(function() {
				return sendMessage('今天喝酒了，不会明天就不算了吧','left');
			}, 21000);
			setTimeout(function() {
				return sendMessage('♥','right');
			}, 23000);
			setTimeout(function() {
				return sendMessage('这个民宿选的真好，苗老板，运筹帷幄呀','left');
			}, 25000);
			setTimeout(function() {
				return sendMessage('宝子今天真漂亮','left');
			}, 27000);
			setTimeout(function() {
				return sendMessage('和宝子的每一天都是开心的','right');
			}, 29000);
			setTimeout(function() {
				return sendMessageImage('https://s21.ax1x.com/2024/03/14/pFcHO0K.jpg','left');
			}, 31000);
			setTimeout(function() {
				return sendMessageImage('https://s2.loli.net/2024/03/14/WwC9iFrUDTO7leb.jpg','right');
			}, 31000);
			return setTimeout(function() {
				return sendMessage("当然是算你倒霉啦",'right');
			}, 31000);
		});

	}).call(this);