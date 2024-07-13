<div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
<div class="carousel-inner">
    <div class="carousel-item active " data-bs-interval="10000">
        <div class="ratio ratio-21x9">
            <video autoPlay loop muted ref={vidRef}>
                <source src="/videos/teaser-1.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
        <div class="ratio ratio-21x9">
            <video autoPlay loop muted ref={vidRef}>
                <source src="/videos/abc_video.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
    <div class="carousel-item">
    <div class="ratio ratio-21x9">
            <video autoPlay loop muted ref={vidRef}>
                <source src="/videos/teaser-1.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>

{/* <p class="text-white"><span class="me-2 badge text-bg-warning py-2">IMDB</span>8.7/10<img src="/web/ratings.png" alt="" class="ms-2 mg-fluid" width="5%"/></p> */}


<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>



