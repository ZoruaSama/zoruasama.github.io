;var dict1=["外向","善良","开朗","活泼","好动","轻松","愉快","热情","可亲","豁达","稳重","洒脱","真诚","豪爽","耿直","成熟","独立","果断","巧舌","机敏","幽默","坚强","兴奋","热情","率直","毅力","友爱","风趣","沉静","谨慎","忠诚","友善","严肃","光明","果断","健谈","宽容","谦逊","坚强","兴奋","热情","率直","毅力","泼辣","正义","沉静","绅士","忠诚","友善","严肃","忠心","乐观","坦率","勇敢","自信","自立","沉著","执著","中二","体贴","满足","积极","有趣","知足","勤劳","和气","无畏","务实","严格","冲动","幼稚","慷慨","依赖","任性","剽悍","深沉","大方","倔强","冷静","孤僻","济世","武断","浮躁","憨憨","易怒","轻率","善变","狡猾","易怒","不将就","慵懒","专心","友爱","博爱","热心肠","冷漠","神秘","冷淡","自在","逍遥","天才","逆反","怨恨","鲁莽","放任","博学","固执","内向","强识","博闻","害羞","敏感","迟钝","纤弱","爱笑","顺从","爱哭","安静","寡言","保守","被动","忍让","治愈","谨慎","胆怯","温和","老实","平和","顺服","含蓄","不将就","羞涩","坦诚","呆呆","爽快","好胜心","淡名利","可爱","耐心","悲观","消极","强迫症","拖延症","懒癌","玩尬","好交际","善组织","有韧性","可依赖","规范型","好心肠","善交际","无异议","竞争性","自控","受尊重","激励性","重秩序","有条理","聆听者","无拘束","领导者","受欢迎","神经质","糊涂","易燃","易兴奋","温柔","专注","善争辩","无目标","宽恕","热忱","激动","难预测","伶俐","灵活","控制欲","情绪化","淘气","占有欲","寂寞","好表现",];var dict2=["驾驭雷元素","驾驭风元素","驾驭水元素","能操控重力","驾驭土元素","驾驭冰元素","驾驭木元素","驾驭光元素","驾驭暗元素","会时间静止","能操控时速","会时间倒流","会时光穿梭","会瞬间移动","会传送","想象具现化","会高速移动","能腐蚀一切","能穿越次元","驾驭火元素","能操控声波","能操控磁力","能操控能量","会空间切割","能操控金属","能分解物质","能使物体透明","会隐身","能剥夺视觉","能斩断一切","会隔空取物","能复制物体","能操作矢量","能石化生物","能巨大化","能迷你化","能附身强化","能快速愈合","具有不死之身","会七十二变","能穿墙","能分身","能飞行","能吸取体力","能吸取自然精华","有巨大力气","能转移伤害","能控制虫类","会念力","能控制心灵","能进入梦境","能预知未来","会读心术","会记忆修改","会快速记忆","具有千里眼","会操控人偶","会复制能力","能操作因果","能预知危险","能操纵气象",];var dict3=["普通人","圣剑士","魔法师","魔剑士","炼金术师","战斗法师","格斗家","刺客","街头霸王","柔道家","散打大师","气功大师","剑圣","武斗家","机械师","弹药师","吟游诗人","神枪手","枪炮师","驱魔师","复仇者","驯龙师","龙斗士","圣骑士","狂战士","死灵术士","魔道学者","召唤师","鬼剑士","魔导师","元素师","弓箭手","忍者","精灵骑士","吸血鬼","魔王","牧师","科学家","舞者","巨剑使","盾使","半兽人","龙骑士","狼人","大将军","巫师","生化学家","医生","猎人","通灵术师","傀儡师","药剂师","太刀使","短剑使","战锤使","双斧使","巨斧使","锻造师","天使"];var imgs=['/img/crossspace/1.jpg','/img/crossspace/2.jpg','/img/crossspace/3.jpg','/img/crossspace/4.jpg','/img/crossspace/5.jpg','/img/crossspace/6.jpg','/img/crossspace/7.jpg',];function hasAscii(str){if(str=="")return false;for(var i in str){var asc=str.charCodeAt(i);if(asc>=0&&asc<=255){return true}}return false}function hex2int(hex){var len=hex.length,a=new Array(len),code;for(var i=0;i<len;i++){code=hex.charCodeAt(i);if(48<=code&&code<58){code-=48}else{code=(code&0xdf)-65+10}a[i]=code}return a.reduce(function(acc,c){acc=16*acc+c;return acc},0)}function crossspace(name){if(hasAscii(name)){return"暂时还不支持的包含字母/数字的输入"}arr=encodeURI(name).split('%');var res=[0,0,0];for(j=0,len=arr.length;j<len;j++){res[j%3]+=hex2int(arr[j])}return dict1[(res[0]+res[1])%dict1.length]+'、'+dict1[res[0]%dict1.length]+'的'+dict2[(res[1]+res[2])%dict2.length]+'的'+dict3[(res[2])%dict3.length]}function imgurl(name){if(hasAscii(name)){return imgs[res[0]%imgs.length]}arr=encodeURI(name).split('%');var res=[0,0,0];for(j=0,len=arr.length;j<len;j++){res[j%3]+=hex2int(arr[j])}return imgs[res[0]%imgs.length]}