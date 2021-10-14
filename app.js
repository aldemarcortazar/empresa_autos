document.addEventListener('DOMContentLoaded', e => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })

    // Swal.fire('Bienvenido A  la pagina oficial de TRANSPORTE DE CARGA S.A.S')
});
( (d) => {
    const $btnMenu = d.querySelector('.menu-btn'),
    $menu = d.querySelector('.menu');

    $btnMenu.addEventListener( 'click' , e => {
        $btnMenu.firstElementChild.classList.toggle('none');
        $btnMenu.lastElementChild.classList.toggle('none');

        $menu.classList.toggle('isactive');
    });

    d.addEventListener('click' , e => {
        if( !e.target.matches('.menu a') ) return false;
        $menu.classList.remove('isactive');
        $btnMenu.firstElementChild.classList.toggle('none');
        $btnMenu.lastElementChild.classList.toggle('none');
    });

})(document);

/************contact form */

( () => {
    const $form = document.getElementById('contact-form'),
        $loader = document.querySelector('.conctact-form-loader'),
        $modal = document.querySelector('.modal');

    $form.addEventListener('submit' , e => {
        e.preventDefault();
        $loader.classList.remove('none');
        fetch('https://formsubmit.co/ajax/anino79@misena.edu.co', {
            method: 'POST',
            data: new FormData(e.target),
        })
        .then( res => res.ok ? res.json() : Promise.reject(res) )
        .then( data => {
            $modal.classList.add('is-active');
            $form.reset();
        })
        .catch( err => {
            let messague= err.statusText || 'vaya ocurrio un errror';
            document.querySelector('.enviar').nextElementSibling.innerHTML = `<h3 style="color: red"> ${err.status} ${messague} </h3>`;
        })
        .finally( () => {
            $loader.classList.add('none');
            setTimeout( () => $modal.classList.remove('is-active') , 3000 )
        });
    });

})();