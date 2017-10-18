$(document).ready(function() {
	var questionJson = [{
		title: "股市使你想到哪种游戏？",
		answer: [{
			con: "国际象棋",
			data: 0
		}, {
			con: "斗地主",
			data: 3
		}]
	}, {
		title: "在决定买进或卖出时重要的是：",
		answer: [{
			con: "对股票的分析",
			data: 0
		}, {
			con: "对市场的分析",
			data: 3
		}]
	}, {
		title: "我经常以……来评判我的股票。",
		answer: [{
			con: "买入价",
			data: 0
		}, {
			con: "当天牌价",
			data: 3
		}]
	}, {
		title: "在买股票时重要的是",
		answer: [{
			con: "选择种类",
			data: 0
		}, {
			con: "时机",
			data: 3
		}]
	}, {
		title: "对短期股市趋势起决定作用的是：",
		answer: [{
			con: "经济增长率",
			data: 0
		}, {
			con: "市场的技术状况",
			data: 3
		}]
	}, {
		title: "对中期股市趋势起决定作用的是：",
		answer: [{
			con: "经济增长率",
			data: 0
		}, {
			con: "利息",
			data: 3
		}]
	}, {
		title: "对长期股市趋势起决定作用的是：",
		answer: [{
			con: "行业增长率",
			data: 3
		}, {
			con: "心理",
			data: 0
		}]
	}, {
		title: "我抛售股票：",
		answer: [{
			con: "当获大利时才卖",
			data: 0
		}, {
			con: "不计得失",
			data: 3
		}]
	}, {
		title: "我会把低价卖出的股票用高价买回来。",
		answer: [{
			con: "是",
			data: 3
		}, {
			con: "否",
			data: 0
		}]
	}, {
		title: "我也会买几乎破产的公司的股票，就像会买表现不好的债券一样。",
		answer: [{
			con: "是",
			data: 3
		}, {
			con: "否",
			data: 0
		}]
	}, {
		title: "当行情在小成交额中下跌时，这对市场：",
		answer: [{
			con: "有利",
			data: 3
		}, {
			con: "不利",
			data: 0
		}]
	}, {
		title: "当市场行情虽有好消息但没有立刻上涨时，我会利用这一机会：",
		answer: [{
			con: "买进",
			data: 0
		}, {
			con: "卖出",
			data: 3
		}]
	}, {
		title: "投资时重要的是：",
		answer: [{
			con: "节奏",
			data: 0
		}, {
			con: "计划",
			data: 3
		}]
	}, {
		title: "统计曲线图对什么有意义？",
		answer: [{
			con: "对长期趋势",
			data: 3
		}, {
			con: "对短期趋势",
			data: 0
		}]
	}, {
		title: "炒股人的思维过程与什么人相似？",
		answer: [{
			con: "商人",
			data: 0
		}, {
			con: "医生",
			data: 3
		}]
	}, {
		title: "炒股人的最好的性格是：",
		answer: [{
			con: "直觉",
			data: 3
		}, {
			con: "清醒",
			data: 0
		}]
	}, {
		title: "炒股人的最坏的性格是：",
		answer: [{
			con: "犹豫不决",
			data: 3
		}, {
			con: "胆子过大",
			data: 0
		}]
	}, {
		title: "对炒股来说，什么最危险？ ",
		answer: [{
			con: "对错误信息的错误评判",
			data: 0
		}, {
			con: "对正确信息的错误评判",
			data: 3
		}]
	}, {
		title: "炒股游戏和投机的区别在哪里？ ",
		answer: [{
			con: "在于有价证券的质量",
			data: 0
		}, {
			con: "在于思考的方法",
			data: 3
		}]
	}, {
		title: "股市在普遍提高税收后会涨吗？ ",
		answer: [{
			con: "会",
			data: 3
		}, {
			con: "不会",
			data: 0
		}]
	}, {
		title: "股票会在经济衰退时升值吗？",
		answer: [{
			con: "会",
			data: 3
		}, {
			con: "不会",
			data: 0
		}]
	}, {
		title: "一种由最大的公司一致推荐的股票，我将：",
		answer: [{
			con: "买进",
			data: 0
		}, {
			con: "不卖",
			data: 3
		}]
	}, {
		title: "从短期来看，大金融机构的经理们的行为对我来说的意义：",
		answer: [{
			con: "大",
			data: 3
		}, {
			con: "小",
			data: 0
		}]
	}, {
		title: "内部人推荐他们公司的股票，我认为：",
		answer: [{
			con: "很值得重视",
			data: 0
		}, {
			con: "根本不值得重视",
			data: 3
		}]
	}, {
		title: "一位长年的有经验但无成就的炒股人的意见，我认为：",
		answer: [{
			con: "很重要",
			data: 3
		}, {
			con: "不怎么重要",
			data: 0
		}]
	}, {
		title: "国家时事对股市的影响： ",
		answer: [{
			con: "大",
			data: 3
		}, {
			con: "小",
			data: 0
		}]
	}, {
		title: "当我做出了一个决定之后，我将",
		answer: [{
			con: "立即行动",
			data: 3
		}, {
			con: "再考虑一遍",
			data: 0
		}]
	}, {
		title: "国际时事对股市的影响：",
		answer: [{
			con: "大",
			data: 3
		}, {
			con: "小",
			data: 0
		}]
	}, {
		title: "人们能赢回输掉的钱吗？",
		answer: [{
			con: "根本不会",
			data: 3
		}, {
			con: "有时有可能",
			data: 0
		}]
	}, {
		title: "那些总能在最低价时买进又在最高价时卖出股票的投资人是：",
		answer: [{
			con: "消息最灵通的人",
			data: 0
		}, {
			con: "骗子",
			data: 3
		}]
	}, {
		title: "我研究股票交易所行情表：",
		answer: [{
			con: "每天",
			data: 0
		}, {
			con: "每周",
			data: 3
		}]
	}, {
		title: "投机和投资是以……为区别的：",
		answer: [{
			con: "有时间长度",
			data: 0
		}, {
			con: "相对数目（对财富的衡量）",
			data: 3
		}]
	}, {
		title: "对已经过去的事情进行分析重要吗 ？",
		answer: [{
			con: "是",
			data: 3
		}, {
			con: "不",
			data: 0
		}]
	}, {
		title: "当一场股市暴跌后，所有的征兆都预示着新的转折时，我购买……的股票。",
		answer: [{
			con: "股价稳定未变的",
			data: 3
		}, {
			con: "跌得较多的",
			data: 0
		}]
	}];
	var getArrayItems = function(arr, num) {
		var temp_array = new Array();
		for (var index in arr) {
			temp_array.push(arr[index]);
		}
		var return_array = new Array();
		for (var i = 0; i < num; i++) {
			if (temp_array.length > 0) {
				var arrIndex = Math.floor(Math.random() * temp_array.length);
				return_array[i] = temp_array[arrIndex];
				temp_array.splice(arrIndex, 1);
			} else {
				break;
			}
		}
		return return_array;
	}
	var demo = (function() {
		var funs = {
			'init': function() {
				$("body").addClass("bodyshow");
				var thisQuestionArr = getArrayItems(questionJson,6);
				var thisQuestionStr = "";
				for(i=0;i<thisQuestionArr.length;i++){
					var title     = thisQuestionArr[i].title;
					thisQuestionStr += '<div class="questionlist">';
					var answerArr = thisQuestionArr[i].answer;
					var answerCon = answerArr[0].con;
					var isRight = answerArr[0].data == 3 ? "rightanswer" : "";
					thisQuestionStr += '	<a href="javascript:;" class="p2_4 ' + isRight + '">' + answerCon + '</a>';
					thisQuestionStr += '	<div class="jumpnumup" id="jumpnumup">+100,000</div>';
					thisQuestionStr += '	<div class="jumpnumdown" id="jumpnumdown">-100,000</div>';
					thisQuestionStr += '	<div class="p2_3">';
					thisQuestionStr += '		<div class="que_num que_num' + (i+1) + '"></div>';
					thisQuestionStr += '		<div class="p2_3_1">' + thisQuestionArr[i].title + '</div>';
					thisQuestionStr += '	</div>';
					var answerCon = answerArr[1].con;
					var isRight = answerArr[1].data == 3 ? "rightanswer" : "";
					thisQuestionStr += '	<a href="javascript:;" class="p2_4 ' + isRight + '">' + answerCon + '</a>';
					thisQuestionStr += '</div>';
				}
				$(".questionlistbox").html(thisQuestionStr);
				$(".style").click(function() {
					$(this).parents(".box").addClass("stylie");
				})
				var nScorllPage = 1;
				var maxQuestionNum = 6;
				var nowQuestionNum = 1;
				var rightQuestionCheck = 0;
				var startNum = 1000000;
				var fnScorllLeft = function(obj) {
					var wWidth = $(window).width() * nScorllPage;
					var translate = "translate(-" + wWidth + "px, 0)";
					obj.css({
						"-webkit-transform": translate
					});
					nScorllPage += 1;
				}
				$(".p1_5").click(function() {
					$("body").addClass("pchange");
					$(".questionlist").first().addClass("questionshow");
					if (nScorllPage == 1) {
						fnScorllLeft($(".mlist li"));
					}
					var sNum = 0;
					jump1 = new countUp("jumpnum", sNum, startNum, 0, 1);
					jump1.start();
				})
				$(".questionlist").find("a").each(function() {
					$(this).on("click", function() {
						$(".jumpnumup").removeClass("jumpnumupmove");
						$(".jumpnumdown").removeClass("jumpnumdownmove");
						if ($(this).hasClass("rightanswer")) {
							rightQuestionCheck += 1;
							sNum = startNum;
							startNum += 100000;
							jump1 = new countUp("jumpnum", sNum, startNum, 0, 1);
							$(this).parents(".questionlist").find(".jumpnumup").css({
								"-webkit-animation": "jumpnumup .8s 0s linear both",
								"perspective": "800",
								"-webkit-perspective": "800"
							})
							jump1.start();
						} else {
							sNum = startNum;
							startNum -= 100000;
							jump1 = new countUp("jumpnum", sNum, startNum, 0, 1);
							$(this).parents(".questionlist").find(".jumpnumdown").css({
								"-webkit-animation": "jumpnumdown .8s 0s linear both",
								"perspective": "800",
								"-webkit-perspective": "800"
							})
							jump1.start();
						}
						if (nowQuestionNum == 6) {
							if (rightQuestionCheck == 6) {
								$(".p3_showtips1,.p3_showtbtn11").show();
							} else if (rightQuestionCheck >= 3 && rightQuestionCheck <= 5) {
								$(".p3_showtips2,.p3_showtbtn21").show();
							} else {
								$(".p3_showtips3,.p3_showtbtn31").show();
							}
							if (nScorllPage == 2) {
								fnScorllLeft($(".mlist li"));
							}
						} else {
							$(this).parents(".questionlist")
								.addClass("questionhide")
								.next(".questionlist")
								.addClass("questionshow");
							nowQuestionNum += 1;
						}
					})
				})
				$(".p3_showtbtn1").click(function() {
					$(".blackbgshow").show().click(function() {
						$(this).hide();
						$(".p3_then").addClass("p1_1_thenlight");
						$(".p3_showtbtn2").addClass("p3_showtbtn2light");
						$(".p3_showtbtn3").addClass("p3_showtbtn3light");
					});
				})
			}
		};
		return {
			'init': funs.init
		}
	})();
	(function() {
		var loading = document.getElementById('loadcontent'),
			loadingMsg = document.getElementById('loadmessage');
		var count = 0,
			manifest = [{
				src: "images/bg1.gif"
			}, {
				src: "images/bg2.gif"
			}, {
				src: "images/p1_1.png"
			}, {
				src: "images/p1_2.png"
			}, {
				src: "images/p1_3.png"
			}, {
				src: "images/p1_4.png"
			}, {
				src: "images/p1_5_1.png"
			}, {
				src: "images/p1_5.png"
			}, {
				src: "images/p1_6.png"
			}, {
				src: "images/p2_1.png"
			}, {
				src: "images/p2_2.png"
			}, {
				src: "images/p2_btn1.png"
			}, {
				src: "images/p2_btn2.png"
			}, {
				src: "images/p2_num1.png"
			}, {
				src: "images/p2_num2.png"
			}, {
				src: "images/p2_num3.png"
			}, {
				src: "images/p2_num4.png"
			}, {
				src: "images/p2_num5.png"
			}, {
				src: "images/p2_num6.png"
			}, {
				src: "images/p3_11.png"
			}, {
				src: "images/p3_12.png"
			}, {
				src: "images/p3_13.png"
			}, {
				src: "images/p3_21.png"
			}, {
				src: "images/p3_211.png"
			}, {
				src: "images/p3_22.png"
			}, {
				src: "images/p3_221.png"
			}, {
				src: "images/p3_23.png"
			}, {
				src: "images/p3_231.png"
			}, {
				src: "images/p3_3.png"
			}, {
				src: "images/p3_31.png"
			}, {
				src: "images/p3_41.png"
			}, {
				src: "images/p3_411.png"
			}, {
				src: "images/p3_412.png"
			}, {
				src: "images/p3_51.png"
			}, {
				src: "images/p3_511.png"
			}, {
				src: "images/p3_512.png"
			}];
		var loader = new createjs.LoadQueue();
		loader.addEventListener('progress', function(evt) {
			loading.style.width = evt.progress * 100 + '%';
		});
		loader.addEventListener('complete', function(evt) {
			$('#loading').hide();
			demo.init();
		});
		loader.loadManifest(manifest);
	})();
})