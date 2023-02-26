// codigo referente a parte responsiva do menu de barras
// ou menu sanduiche fasendo aparecer e desaparecer alista do menu
$(document).ready(function () {
  $("#barras").click(function () {
    $("#menu").toggleClass("menu-ativo");
  });
});

//  codigo referente ao carrosel

$(document).ready(function () {
  $("#carrosel img:eq(0)").addClass("promocional-ativo").show();
});

setInterval(slide, 2500);

function slide() {
  if ($(".promocional-ativo").next().length) {
    $(".promocional-ativo")
      .removeClass("promocional-ativo")
      .hide()
      .next()
      .addClass("promocional-ativo")
      .show();
  } else {
    $(".promocional-ativo").removeClass().hide();
    $("#carrosel img:eq(0)").addClass("promocional-ativo").show();
  }
}
//function mostrarpopup(){//
//   window.alert("hello world")//
//}
let email = document.getElementById("campo email");

function enviarEmail() {
  let emailDigitado = email.Value;
  console.log(emailDigitado);
}

let listaProdutos = [
  {
    titulo: "pc gamer ",
    descriçao: "pc gamer",
  },
  {
    titulo: "pc gamer ",
    descriçao: "pc gamer",
  },
  {
    titulo: "pc gamer ",
    descriçao: "pc gamer",
  },
];

function renderizarprodutos() {
  let espaco = document.getElementById("produtosgamer");

  let template = "";

  for (let index = 0; index < listaProdutos.length; index++) {
    const produtos = listaProdutos[index];

    template += ` <div id="produtos gamer" class="produtos">
         <h2>Promoçao</h2> 
         <img src="img/pc.png" alt="foto do pc gamer em promoçao"width="200px">
         <h3>${produtos.titulo}</h3>
         <p>${produtos.titulo}</p>
         </div>
        `;
  }

  espaco.innerHTML = template;
}
