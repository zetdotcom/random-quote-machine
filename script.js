
// Array of quotes -------------
var randomverse = new Array ();

randomverse[1] = 'Set your affection on things above, not on things on the earth.<br/><b>Colossians 3:2</b>';
randomverse[2] = 'For all have sinned and come short of the glory of God<br/><b>Romans 3:23</b>';
randomverse[3] = 'Come unto me, all ye that labor and are heavy laden, and I will give you rest.<br/><b>Matthew 11:28</b>';
randomverse[4] = 'Not everyone that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my father which is in heaven.<br/><b>Matthew 7:21</b>';
randomverse[5] = 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.<br/><b>John 3:16</b>';
randomverse[6] = 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord<br/><b>Romans 6:23</b>';
randomverse[7] = 'Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.<br/><b>Colossians 3:16</b>';
randomverse[8] = 'My brethren count it all joy when you fall into diverse temptations<br/><b>James 1:2</b>';
randomverse[9] = 'A double minded man is unstable in all his ways<br/><b>James 1:8</br>';
randomverse[10] = 'And Jesus said unto them, Because of your unbelief: for verily I say unto you, If ye have faith as a grain of mustard seed, ye shall say into this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you.<br/> <b>Matthew 17:20</b>';
randomverse[11] = 'How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God?<br/><b>Hebrews 9:14</b>';
randomverse[12] = 'Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap.<br/><b>Galatians 6:7</b>';
randomverse[13] = 'Trust in the Lord with all thine heart and lean not unto thine own understanding.<br/><b>Proverbs 3:5</b>';
randomverse[14] = 'To everything there is a season, and a time to every purpose under the heaven.<br/><b>Ecclesiastes 3:1</b>';
randomverse[15] = 'For what shall it profit a man if he shall gain the whole world and lose his own soul?<br/><b>Mark 8:36</b>';
randomverse[16] = 'Trust not in oppression, and become not vain in robbery: if riches increase, set not your heart upon them. <br/><b>Psalm 62:10</b>';
randomverse[17] = 'Jesus saith unto him, I am the way, the truth, and the light: no man cometh unto the father, but by me.<br/><John 14:6</b>';
randomverse[18] = 'Let not your heart be troubled: ye believe in God, believe also in me.<br/><b>John 14:1</b>';
randomverse[19] = 'Now faith is the substance of things hoped for, the evidence of things not seen.<br/><b>Hebrews 11:1</b>';
randomverse[20] = 'For whosoever shall call upon the name of the Lord shall be saved. <br/><b>Romans 10:13</b>';
randomverse[21] = 'And ye shall know the truth, and the truth shall make you free. <br/><b>John 8:32</b>';
randomverse[22] = 'If ye love me, keep my commandments. <br/><b>John 14:15</b>';
randomverse[23] = 'I can do all things through Christ which strengthen me. <br/><b>Philippians 4:13</b>';
randomverse[24] = 'Blessed are they that do this commandments, that they may have right to the tree of life, and may enter in through the gates into the city.<br/><b>Revelation 22:14</b>';
randomverse[25] = 'Blessed are the meek for they shall inherit the earth.<br/><b>Matthew 5:5</b>';
randomverse[26] = 'Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.<br/><b>Matthew 7:7</b>';
randomverse[27] = 'Judge not, that ye be not judged. <br/><b>Matthew 7:1</b>';
randomverse[28] = 'But I say unto you which hear, love your enemies, do good to them which hate you.<br/><b>Luke 6:27</b>';
randomverse[29] = 'This is my commandment that ye love one another, as I have loved you.<br/><b>John 15:12</b>';
randomverse[30] = 'Then said Jesus, Father, forgive them; for they know not what they do.<br/><b>Luke 23:34</b>';


function tweet(message) {
  window.open('https://twitter.com/intent/tweet?hashtags= HolyBible&text='   + encodeURIComponent(message));
}

function face(message) {
  window.open("https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/zetdotcom/pen/YQqevR&quote=" + encodeURIComponent(message));
}
//function to open new window, get social media URL and select your quote

var msg;
function tweetHandler() {
  tweet(msg); 
}

function faceHandler() {
  face(msg); 
}

$(document).ready(function() {
  $("#button").on("click", function(){
    
    var quotes= $("#quotes");   
    quotes.css({"font-size": "0px", "opacity": "0"});
    var fontValue = document.getElementById("quotes").style.fontSize;
    if (fontValue == "0px") {
      quotes.animate({fontSize: "100%", opacity: "1"}, "slow");
    }  
 //animation to put text to 0, than animate to full font size   
    
    var randomquote = Math.floor(Math.random()*(randomverse.length-1));
    msg = randomverse[randomquote];
    
    $("#quotes").html(msg);  
 //function to select random quote  
  });
  

  $('#tweetMessage').on('click', tweetHandler);
  $("#facebookMessage").on("click", faceHandler);
  //function that actually share your quote on facebook/twitter
});
  


