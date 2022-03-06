import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'




function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="container bg-dark text-white mt-2 pt-5 p-3 rounded-2 ">
          <div className="text-left title-text">
            <h3 className="fw-bold">Title of a longer<br />Featurred Blog Post</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum ipsam dolores dolorum quod molestiae quo deserunt
              modi soluta quae delectus eius.
              Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
              Nostrum ipsam dolores dolorum quod molestiae quo deserunt
              modi soluta quae delectus eius.
              Nostrum ipsam dolores dolorum quod molestiae quo deserunt
              modi soluta quae delectus eius.
            </p>
            <p>Continue Reading...</p>
          </div>
        </div>
        <main>
          <div className='container'>
            <div className='row my-4'>
              <div className='col-md-6 col-sm-12'>
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4 imgDiv">
                      <img src={logo} class="img-fluid rounded-start mt-3" alt="Image Not Found" />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                          This content is a little bit longer.
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4 imgDiv">
                      <img src={logo} class="img-fluid rounded-start mt-3" alt="Image Not Found" />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                          This content is a little bit longer.
                          This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-sm-12'>
              <h2>From the Firedose</h2>
              <div className='underLine'></div>
              <h1 className='my-3'>Sample Blog Post</h1>
              <p>Feb 14, 2020 by <code>Muhammad Faizan Ansari</code></p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
              </p>
              <div className='underLine'></div>
              <p className='my-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
              </p>
              <p>
                Lorem ipsum dolor sit amet <strong><em>consectetur adipisicing</em></strong> elit.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Numquam inventore, eaque vel, <span className='specialText'>hic nisi officia odio consequuntur!</span>
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
              </p>
              <div className='underLine'></div>
              <h1 className='my-3'>Heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
              </p>
              <h1 className='my-3'>Sub-Heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
              </p>
              <p>
                Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
                Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                modi soluta quae delectus eius.
              </p>
            </div>


            <div className='col-md-4 col-sm-12 mb-3'>
              <div className='rounded shadow aboutText mb-4'>
                <h2 className='my-2'>About</h2>
                <p>
                  Numquam inventore, eaque vel, hic nisi officia odio consequuntur!
                  Nostrum ipsam dolores dolorum quod molestiae quo deserunt
                  modi soluta quae delectus eius.
                </p>
              </div>
              <h2 className='my-3'>Archives</h2>
              <div className='px-4'>
                <span className='specialText'>March 23, 2020</span><br />
                <span className='specialText'>Feburary 12, 2020</span><br />
                <span className='specialText'>October 23, 2021</span><br />
                <span className='specialText'>January 2, 2020</span><br />
                <span className='specialText'>November 19, 2021</span><br />
                <span className='specialText'>January 28, 2021</span><br />
                <span className='specialText'>April 4, 2020</span><br />
                <span className='specialText'>May 2, 2020</span><br />
              </div>
              <h2 className='my-3'>Elsewhere</h2>
              <div className='px-4'>
                <span className='specialText'>HitHub</span><br />
                <span className='specialText'>Twitter</span><br />
                <span className='specialText'>Facebook</span><br />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Assignment &copy; 2022. <span className='footerText'><em>By Muhammad Faizan Ansari</em></span></p>
        </footer>
      </div>
    </div>

  );
}

export default App;
