# Capitulo 7 - Temas vistos

## Metodos de selección

  - [document.querySelector()](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)
  - [document.querySelectorAll()](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll)
  - [document.getElementById()](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)

---

## Metodos para definir, obtener y eliminar atributos

  - [Element.setAttribute()](https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute)
  - [Element.getAttribute()](https://developer.mozilla.org/es/docs/Web/API/Element/getAttribute)
  - [Element.removeAttribute()](https://developer.mozilla.org/es/docs/Web/API/Element/removeAttribute)

---

## Atributos globales

  - [contentEditable](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/contentEditable) - *Especifica si el elemento es editable o no*
      - HTMLElement.setAttribute('contentEditable', **boolean**) (*true/false*)

  - [dir](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir) - *Obtiene o establece la direccionalidad de escritura del texto del contenido del elemento actual*
      - HTMLElement.setAttribute('dir', 'ltr') *left-to-right*
      - HTMLElement.setAttribute('dir', 'rtl') *right-to-left*
      - HTMLElement.setAttribute('dir', 'auto')

  - [hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden) - *Es un valor booleano que es verdadero si el elemento está oculto; de lo contrario, el valor es falso*
      - HTMLElement.setAttribute('hidden') (*Agregar propiedad hidden*)
      - HTMLElement.removeAttribute('hidden') (*Quitar propiedad hidden*)

  - [tabindex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabindex) - *La propiedad tabIndex de la interfaz HTMLElement representa el orden de tabulación del elemento actual*
      - HTMLElement.setAttribute('tabindex', '0') (Cambiar el valor numerico para dar el orden)

  - [title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title) - *Esta propiedad representa el título del elemento*
      - HTMLElement.setAttribute('title', 'Aca va un titulo epico')

  - [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) - *Devuelve el nombre de la clase y la puede modificar*
      - console.log(Element.className)
      - Element.className = 'newClassName'

---

##  Atributos de los inputs
  - [value](https://developer.mozilla.org/es/docs/Web/API/HTMLInputElement#properties) - *Muestra lo que esta adentro del input*
      - console.log(Element.className)
  
  - [type](https://developer.mozilla.org/es/docs/Web/HTML/Element/input#attr-type) - *Cambia el tipo de input*
      - inputElement.type = 'x' (*En la documentación muestra todos los diferentes tipos*)