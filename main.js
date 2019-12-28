

///////////////////////////////////////////////////////////////////////////
//优化封装后的写法
let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({transform:'translateX(-400px)'})
bindEvent()
$(next).on('click', function(){
  goToSlide(current+1)
})
$(previous).on('click', function(){
  goToSlide(current-1)
})

let timer = setInterval(function(){
  goToSlide(current+1)
},2000)

$('.container').on('mouseenter', function(){
  window.clearInterval(timer)
}).on('mouseleave', function(){
  timer = setInterval(function(){
    goToSlide(current+1)
  },2000)
})
function bindEvent(){

  $('#buttonWrapper').on('click','button' function(e){//点击里面的按钮才会触发，点击buttonwrapper不会
        let $button = $(e.currentTarget)//获取到这个按钮
        let index = $button.index()//获取这个按钮处于第几个
        goToSlide(index)
  })
}
//重要一步
function goToSlide(index){
  if(index > $buttons.length-1){
    index = 0
  }else if(index <0){
    index = $buttons.length - 1

  }
  if(current === $buttons.length -1 && index === 0){
    //最后一张到第一张
    $slides.css({transform:`translateX(${-($buttons.length + 1) *400}px)`})
      .one('transitionend', function(){
        $slides.hide().offset()
        $slides.css({transform:`translateX(${-(index+1)*400}px)`}).show()
      })
  }else if(current === 0 &&index === $buttons.length - 1){
    $slides.css({transform:`translateX(0px)`})
      .one('transitionend', funtion(){
           $slides.hide().offset()
        $slides.css({transform:`translateX(${-(index+1)*400}px)`}).show()
  }else{
    $slides.css({transform:`translateX(${- (index+1) * 400}px)`})
  }
    
  current = index
}
function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}









/* $buttons.eq(0).on('click', function(){
        if(current == 2){
            $slides.css({transform:'translateX(-1600px)'})
                .one('transitionend', function(){
                    $slides.hide()
                        .offset()
                    $slides.css({transform:'translateX(-400px'})
                        .show()    
                })
        }else{
            $slides.css({transform:'translateX(-400px)'})
        }
        current = 0
    })
    $buttons.eq(1).on('click', function(){
        $slides.css({transform:'translateX(-800px)'})
        current = 1
    })
    $buttons.eq(2).on('click', function(){
        if(current == 0){
            $slide.css({transform:'translateX(0PX)'})
                .one('transitionend', function(){
                    $slides.hide()
                        .offset()
                    $slides.css({transform:'translateX(-1200px)'})
                        .show()    
                })
        }else{
            $slides.css({transform:'translateX(-1200px)'})
            current = 2
        }
    })
    let n
初始化 ()
setInterval(()=>{
  makeLeave(getImage(n))
      .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
      })
  makeCurrent(getImage(n+1))
  n +=1
},3000)



// 下面可以不看
function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}
function x(n) {
  if(n>5){
    n = n%5
    if(n===0) {
      n = 5
    }
  } // n = 1 2 3 4 5
  return n
}

function 初始化 (){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave')
  
}
function makeEnter($node){
  return $node.removeClass('leave current').addClass('enter')
}

}/*/
