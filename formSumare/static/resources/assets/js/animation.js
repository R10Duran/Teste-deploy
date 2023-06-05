$('#youtube').append(
  ' <iframe width="100%" height="400" src="https://www.youtube.com/embed/k77vDcPZPFM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen loading="lazy"></iframe>'
),
  localStorage.sumareCookie && ' ' != localStorage.sumareCookie
    ? console.log('vazio')
    : ($('.box-cookies').removeClass('hide'), console.log('cheio'))
const privacidade = document.querySelector('.politica'),
  textoLateral = document.querySelector('.texto-lateral'),
  btnAccept = document.querySelector('.btn-accept'),
  btnReset = document.querySelector('.btn-limpar'),
  openMenuCookie = () => {
    $('.texto-lateral').removeClass('hide-texto'), console.log('teste')
  },
  acceptCookies = () => {
    $('.box-cookies').addClass('hide'),
      $('.texto-lateral').addClass('hide-texto'),
      localStorage.setItem('sumareCookie', 'accept'),
      console.log('aceito')
  },
  resetCookie = () => {
    $('.box-cookies').addClass('hide'),
      $('.texto-lateral').addClass('hide-texto'),
      console.log('reseto')
  },
  btnCookies = document.querySelector('.btn-cookies')
privacidade.addEventListener('click', openMenuCookie),
  btnCookies.addEventListener('click', acceptCookies),
  btnAccept.addEventListener('click', acceptCookies),
  btnReset.addEventListener('click', resetCookie)
var $carousel = $('.carousel-flickity').flickity({
    imagesLoaded: !0,
    percentPosition: !1
  }),
  $imgs = $carousel.find('.carousel-cell img'),
  docStyle = document.documentElement.style,
  transformProp =
    'string' == typeof docStyle.transform ? 'transform' : 'WebkitTransform',
  flkty = $carousel.data('flickity')
$carousel.on('scroll.flickity', function () {
  flkty.slides.forEach(function (o, e) {
    var t = $imgs[e],
      s = -((o.target + flkty.x) * 1) / 3
    t.style[transformProp] = 'translateX(' + s + 'px)'
  })
}),
  setTimeout(() => {
    $('.next').click(function () {
      $('slick-next').click()
    })
  }, 1e3),
  $('.next').click(function () {
    $('.slick-next').click()
  })
const hamburger = document.querySelector('.hamburger'),
  navMenu = document.querySelector('.nav-menu'),
  navLink = document.querySelectorAll('.nav-link'),
  option = document.getElementsByClassName('option')
var countMenu = 0
function mobileMenu() {
  countMenu > 0
    ? (closeOption(), closeMenu(), (countMenu = 0))
    : (hamburger.classList.toggle('active'),
      navMenu.classList.toggle('active'),
      openOption(),
      countMenu++)
}
hamburger.addEventListener('click', mobileMenu),
  navLink.forEach(o => o.addEventListener('click', closeMenu))
var w = 0,
  h = 0
function myFunction() {
  ;(w = window.outerWidth), (h = window.outerHeight), responsiveFunction()
}
function openOption() {
  $('.option').css('display', 'block')
}
function closeOption() {
  $('.option').css('display', 'none'), closeMenu(), (countMenu = 0)
}
function closeMenu() {
  hamburger.classList.remove('active'),
    navMenu.classList.remove('active'),
    $('.drop-graduacao').css('background', 'transparent !important'),
    $('.drop-login').css('background', 'transparent !important'),
    closeDrop(),
    closeDrop2(),
    countMenu--
}
function responsiveFunction() {
  w < 769 &&
    (w < 634
      ? ($('.coloun-texto-1').css('position', 'absolute'),
        $('.coloun-texto-2').css('position', 'absolute'),
        $('.coloun-texto-3').css('position', 'absolute'))
      : ($('.coloun-texto-1').css('position', 'relative'),
        $('.coloun-texto-2').css('position', 'relative'),
        $('.coloun-texto-3').css('position', 'relative')))
}
;(w = window.outerWidth),
  (h = window.outerHeight),
  $('.box-carousel').each(function (o) {})
var count = 0,
  countTodos = 0
function drop() {
  setTimeout(() => {
    count > 0 ? closeDrop() : (closeDrop2(), openDrop(), openOption())
  }, 0)
}
function openDrop() {
  $('#submenuGraduacao').addClass('submenu-active'),
    $('.option').css('display', 'block'),
    $('.nav-item-menu').removeClass('mais-grad'),
    $('.nav-item-menu').addClass('menos-grad'),
    w < 769
      ? $('.drop-graduacao').css('background', '#022c6b')
      : ($('.drop-graduacao').css('background', 'transparent'),
        $('.option').css('display', 'none')),
    (count = 1)
}
function closeDrop() {
  $('#submenuGraduacao').removeClass('submenu-active'),
    $('.nav-item-menu').removeClass('menos-grad'),
    $('.nav-item-menu').addClass('mais-grad'),
    w > 768 &&
      ($('.drop-graduacao').css('background', 'transparent'),
      $('.option').css('display', 'none')),
    $('.drop-graduacao').css('background', 'transparent'),
    (count = 0)
}
var count2 = 0
function drop2() {
  setTimeout(() => {
    count2 > 0 ? closeDrop2() : (closeDrop(), openDrop2(), openOption())
  }, 0)
}
function openDrop2() {
  $('#submenuPosGraduacao').addClass('submenu-active'),
    $('.option').css('display', 'block'),
    $('.nav-item-menu-pos').removeClass('mais-pos'),
    $('.nav-item-menu-pos').addClass('menos-pos'),
    w < 769
      ? $('.drop-pos').css('background', '#022c6b')
      : ($('.drop-pos').css('background', 'transparent'),
        $('.option').css('display', 'none')),
    (count2 = 1)
}
function closeDrop2() {
  $('#submenuPosGraduacao').removeClass('submenu-active'),
    $('.nav-item-menu-pos').removeClass('menos-pos'),
    $('.nav-item-menu-pos').addClass('mais-pos'),
    w > 768 &&
      ($('.drop-pos').css('background', 'transparent'),
      $('.option').css('display', 'none')),
    $('.drop-pos').css('background', 'transparent'),
    (count2 = 0)
}
var count1 = 0
function drop1() {
  setTimeout(() => {
    count1 > 0 ? closeDrop1() : (openDrop1(), openOption())
  }, 0)
}
function openDrop1() {
  $('#submenulogin').addClass('submenu-active'),
    $('.option').css('display', 'block'),
    $('.nav-item-menu-login').removeClass('mais-login'),
    $('.nav-item-menu-login').addClass('menos-login'),
    w < 769
      ? $('.drop-login').css('background', '#022c6b')
      : ($('.drop-login').css('background', 'transparent'),
        $('.option').css('display', 'none')),
    (count1 = 1)
}
function closeDrop1() {
  $('#submenulogin').removeClass('submenu-active'),
    $('.nav-item-menu-login').removeClass('menos-login'),
    $('.nav-item-menu-login').addClass('mais-login'),
    w > 768 &&
      ($('.drop-login').css('background', 'transparent'),
      $('.option').css('display', 'none')),
    $('.drop-login').css('background', 'transparent'),
    (count1 = 0)
}
function dropCard1() {
  setTimeout(() => {
    if (count > 0)
      return (
        $('.coloun-texto-1').removeClass('coloun-texto-active'),
        $('.coloun-titulo-1').removeClass('icon-2'),
        $('.coloun-titulo-1').addClass('icon'),
        setTimeout(() => {
          $('.coloun-texto-1').css('position', 'absolute')
        }, 350),
        count--
      )
    $('.coloun-texto-1').addClass('coloun-texto-active'),
      $('.coloun-texto-1').css('position', 'relative'),
      $('.coloun-titulo-1').removeClass('icon'),
      $('.coloun-titulo-1').addClass('icon-2'),
      count++
  }, 100)
}
function dropCard2() {
  setTimeout(() => {
    if (count > 0)
      return (
        $('.coloun-texto-2').removeClass('coloun-texto-active'),
        $('.coloun-titulo-2').removeClass('icon-2'),
        $('.coloun-titulo-2').addClass('icon'),
        setTimeout(() => {
          $('.coloun-texto-2').css('position', 'absolute')
        }, 350),
        count--
      )
    $('.coloun-texto-2').addClass('coloun-texto-active'),
      $('.coloun-texto-2').css('position', 'relative'),
      $('.coloun-titulo-2').removeClass('icon'),
      $('.coloun-titulo-2').addClass('icon-2'),
      count++
  }, 100)
}
if (w < 769)
  function dropTodos() {
    if (countTodos > 0)
      return (
        $('.menu-item-cursos').css('opacity', '0'),
        setTimeout(() => {
          $('.menu-item-cursos').css('display', 'none')
        }, 300),
        $('#todos').addClass('ativo-menu'),
        $('#todos').removeClass('desativo-menu'),
        $('#todos').css('color', '#022c6b'),
        countTodos--
      )
    $('.menu-item-cursos').css('display', 'block'),
      setTimeout(() => {
        $('.menu-item-cursos').css('opacity', '1')
      }, 300),
      $('#todos').addClass('desativo-menu'),
      $('#todos').css('color', '#022c6b'),
      countTodos++
  }
function dropCard3() {
  setTimeout(() => {
    if (count > 0)
      return (
        $('.coloun-texto-3').removeClass('coloun-texto-active'),
        $('.coloun-titulo-3').removeClass('icon-2'),
        $('.coloun-titulo-3').addClass('icon'),
        setTimeout(() => {
          $('.coloun-texto-3').css('position', 'absolute')
        }, 350),
        count--
      )
    $('.coloun-texto-3').addClass('coloun-texto-active'),
      $('.coloun-texto-3').css('position', 'relative'),
      $('.coloun-titulo-3').removeClass('icon'),
      $('.coloun-titulo-3').addClass('icon-2'),
      count++
  }, 100)
}
var c = 0,
  countMenuUm = 0,
  countMenuDois = 0,
  countDropCursos = 0
function dropMenuItemUm() {
  if (countMenu > 0)
    return $('#subMenuArea-1').removeClass('menuActive'), countMenu--
  $('#subMenuArea-1').addClass('menuActive'), countMenu++
}
function dropMenuItemDois() {
  if (countMenuDois > 0)
    return $('#subMenuArea-2').removeClass('menuActive'), countMenuDois--
  $('#subMenuArea-2').addClass('menuActive'), countMenuDois++
}
function dropCursosUm() {
  if (countDropCursos > 0)
    return $('#menuGestao').removeClass('active-cursos'), countDropCursos--
  $('#menuGestao').addClass('active-cursos'), countDropCursos++
}
function dropCursosDois() {
  if (countDropCursos > 0)
    return $('#menuEducacao').removeClass('active-cursos'), countDropCursos--
  $('#menuEducacao').addClass('active-cursos'), countDropCursos++
}
function dropCursosTres() {
  if (countDropCursos > 0)
    return $('#menuTecnologia').removeClass('active-cursos'), countDropCursos--
  $('#menuTecnologia').addClass('active-cursos'), countDropCursos++
}
function dropCursosQuatro() {
  if (countDropCursos > 0)
    return $('#menuSaude').removeClass('active-cursos'), countDropCursos--
  $('#menuSaude').addClass('active-cursos'), countDropCursos++
}
function dropCursosCinco() {
  if (countDropCursos > 0)
    return $('#menuEngenharia').removeClass('active-cursos'), countDropCursos--
  $('#menuEngenharia').addClass('active-cursos'), countDropCursos++
}
var element = $('.menu-item'),
  count1 = 0
function mostraDetalhes(o) {
  var e = o.getAttribute('data-curso')
  let t = document.querySelectorAll('[data-curso="' + e + '"]'),
    s = document.querySelectorAll('[data-tipo="' + e + '"]')
  $('.cursos-item').css('display', 'none'),
    $('.menu-item').css('color', '#fff'),
    'Todos' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      $('.cursos-item').fadeIn(),
      $('.tecnologia').css('display', 'none'),
      (document.getElementById('todos').innerText = 'Todos'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $('.cursos-item').each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Educacao' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Educa\xe7\xe3o'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Gestao' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Gest\xe3o'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Saude' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Sa\xfade'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Engenharia' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Engenharia'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Tecnologia' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Tecnologia'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Direito' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Direito'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Estrategia-e-Negocios' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Estrategia-e-Negocios'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Financas' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Financas'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Marketing-e-vendas' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Marketing-e-vendas'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Producao-Logistica' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Producao-Logistica'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      })),
    'Recursos-Humanos' == e &&
      ($(s).fadeIn(),
      $(t).css('color', '#0084ff'),
      (document.getElementById('todos').innerText = 'Recursos-Humanos'),
      dropTodos(),
      $(function () {
        $('#filtro').keyup(function () {
          var o = $(this).val()
          $(s).each(function () {
            0 >
            $(this)
              .text()
              .toUpperCase()
              .indexOf(' ' + o.toUpperCase())
              ? $(this).fadeOut()
              : $(this).fadeIn()
          })
        })
      }))
}
$('.arrow-right').click(function () {
  $('#box-1').css('transform', 'translateX(-45rem)'),
    $('#box-2').css('transform', 'translateX(0rem)'),
    $('.arrow-right').css('visibility', 'hidden'),
    $('.arrow-left').css('visibility', 'visible'),
    $('.arrow-right').prop('disabled', !0),
    $('.dots-1').removeClass('active'),
    $('.dots-2').addClass('active')
}),
  $('.arrow-left').click(function () {
    $('#box-1').css('transform', 'translateX(0rem)'),
      $('#box-2').css('transform', 'translateX(45rem)'),
      $('.arrow-right').css('visibility', 'visible'),
      $('.arrow-left').css('visibility', 'hidden'),
      $('.arrow-right').prop('disabled', !1),
      $('.dots-2').removeClass('active'),
      $('.dots-1').addClass('active')
  }),
  $('.tecnologia').css('display', 'none'),
  $(function () {
    $('#filtro').keyup(function () {
      var o = $(this).val()
      $('.cursos-item').each(function () {
        0 >
        $(this)
          .text()
          .toUpperCase()
          .indexOf(' ' + o.toUpperCase())
          ? $(this).fadeOut()
          : $(this).fadeIn()
      })
    })
  }),
  $('.closeModalCred').click(function () {
    $('.modal-backgroundCred').fadeOut(),
      $('#myModalCredenciamento').fadeOut(),
      $('body').css('overflow', 'auto'),
      console.log('fecha')
  }),
  $('#myButtonCredenciamento').click(function () {
    $('.modal-backgroundCred').fadeIn(),
      $('#myModalCredenciamento').fadeIn(),
      $('body').css('overflow', 'hidden'),
      console.log('teste')
  }),
  $('.modal-backgroundCred').click(function () {
    $('.modal-backgroundCred').fadeOut(),
      $('#myModalCredenciamento').fadeOut(),
      $('body').css('overflow', 'auto')
  })
const lazyImages = document.querySelectorAll('.lazy'),
  options = { root: null, rootMargin: '0px', threshold: 0.1 }
function loadImage(o) {
  o.src || (o.src = o.dataset.src)
}
const observer = new IntersectionObserver(function (o, e) {
  o.forEach(function (o) {
    o.intersectionRatio > 0 && (loadImage(o.target), e.unobserve(o.target))
  })
}, options)
lazyImages.forEach(function (o) {
  observer.observe(o)
})
