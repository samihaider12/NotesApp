<template>    
<div id="footer">
 
    <div class="container-fluid ">
        <div class="row footer-section-top" id="footer">   
                <div class="footer-section-middle-end-line"></div>
                             </div>
            <div class="row d-flex py-2 mb-0  footer-section-bottom">
                <p class="col-12 col-md-auto copyright">©Copyright ⎯ My Notes App 2025  </p>
                 
                <p class="col-12 col-md-auto ms-auto credit">Coded with <svg id="heartbeat" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" fill-rule="evenodd" fill="var(--crimson-red)"/></svg> by  <a href="">SamiHaider</a></p>
                
            </div>
        </div>
    </div>
 
</template>
<script setup>
</script>

<style scoped>
/*  footer */
#footer{
  padding: px 0 ;
margin: 0px;   
}
body, html {
    background: #140826;
}

#footer {
    background: #140826;
}

.footer-section-brandName {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #ebf2f0;
}
 .copyright {
    color: #ebf2f0;
}
.credit {
    color: #ebf2f0;
}

.credit a {
    text-decoration: none;
    color: #d7f20c;
    position: relative;
}

.credit a::after {
    content: "";
    width: 0;
    height: 0.125rem;
    left: 0;
    bottom: 0;
    transition: width .4s ease;
    background: #d7f20c;
    position: absolute;
}

.credit a:hover::after {
    width: 100%;
}

#heartbeat {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    fill: #a60311;
    animation: heartbeat .25s infinite alternate;
}

@keyframes heartbeat {
    to {
        transform: scale(1.2);
    }
}
</style>
