import React from 'react'
import blog1  from "../../Pages/assets/img/blog/blog-1.jpg"
import blog2  from "../../Pages/assets/img/blog/blog-author.jpg"
import blog3  from "../../Pages/assets/img/blog/blog-2.jpg"
import blog4  from "../../Pages/assets/img/blog/blog-author-2.jpg"
import blog5  from "../../Pages/assets/img/blog/blog-3.jpg"
import blog6  from "../../Pages/assets/img/blog/blog-author-3.jpg"



const Blog = () => {
  return (
    <section id="recent-posts" class="recent-posts sections-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2>Recent Blog Posts</h2>
        <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
      </div>

      <div class="row gy-4">

        <div class="col-xl-4 col-md-6">
          <article>

            <div class="post-img">
              <img src={blog1} alt="" class="img-fluid"/>
            </div>

            <p className="post-category">Politics</p>

            <h2 class="title">
              <a href="blog-details.html" className='text-decoration-none'>Dolorum optio tempore voluptas dignissimos</a>
            </h2>

            <div class="d-flex align-items-center">
              <img src={blog2} alt="" class="img-fluid post-author-img flex-shrink-0"/>
              <div class="post-meta">
                <p class="post-author">Maria Doe</p>
                <p class="post-date">
                  <time datetime="2022-01-01">Jan 1, 2022</time>
                </p>
              </div>
            </div>

          </article>
        </div>

        <div class="col-xl-4 col-md-6">
          <article>

            <div class="post-img">
              <img src={blog3} alt="" class="img-fluid"/>
            </div>

            <p class="post-category">Sports</p>

            <h2 class="title">
              <a href="blog-details.html" className='text-decoration-none'>Nisi magni odit consequatur autem nulla dolorem</a>
            </h2>

            <div class="d-flex align-items-center">
            <img src={blog4} alt="" class="img-fluid post-author-img flex-shrink-0"/>
              <div class="post-meta">
                <p class="post-author">Allisa Mayer</p>
                <p class="post-date">
                  <time datetime="2022-01-01">Jun 5, 2022</time>
                </p>
              </div>
            </div>

          </article>
        </div>

        <div class="col-xl-4 col-md-6">
          <article>

            <div class="post-img">
            <img src={blog5} alt="" class="img-fluid"/>
            </div>

            <p class="post-category">Entertainment</p>

            <h2 class="title">
              <a href="blog-details.html" className='text-decoration-none'>Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
            </h2>

            <div class="d-flex align-items-center">
              <img src={blog6} alt="" class="img-fluid post-author-img flex-shrink-0"/>
              <div class="post-meta">
                <p class="post-author">Mark Dower</p>
                <p class="post-date">
                  <time datetime="2022-01-01">Jun 22, 2022</time>
                </p>
              </div>
            </div>

          </article>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Blog