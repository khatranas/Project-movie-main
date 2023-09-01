
import star from "../Img/star.svg";
import film from "../Img/film.svg";
import one from "../Img/one.png";
import two from "../Img/two.png";
import three from "../Img/three.png";
import four from "../Img/four.png";


export default function Toprated() {
  return (
    <div>
      {/* Top Rated */}
      <div className="ml-8 mb-3e text-24 font-bold">Top Rated</div>
      <div className="flex">
        <div className="flex ml-8 mr-8">
          <p className="text-56 mr-5 mt-5">1</p>
          <img className="mr-5" src="https://lh3.google.com/u/0/d/1kDqbQ9LGujlgNceXUfwBJtyaXiNKPkFS=w2786-h1510-iv1" alt="mot"></img>
          <div className="Content">
            <button className="bg-white-50 text-Grayscale60 font-normal py-1 px-2 border border-E9EBED-700 rounded-xl">PG-13</button>
            <p className="text-16 font-bold my-3">The Shawshank...</p>
            <p className="text-Grayscale70 flex text-12 mb-3">
              <img src={film}></img>Drama
            </p>
            <p className="flex">
              <img src={star}></img>9.2
            </p>
          </div>
        </div>
        <div className="flex ml-8 mr-8">
          <p className="text-56 mr-5 mt-5">2</p>
          <img className="mr-5" src="https://lh3.google.com/u/0/d/1-obYjGLFnxwWMi8ZSZCPviofCVglYkmF=w1676-h1510-iv1"></img>
          <div className="Content">
            <button className="bg-white-50 text-Grayscale60 font-normal py-1 px-2 border border-E9EBED-700 rounded-xl">PG-13</button>
            <p className="text-16 font-bold my-3">The Godfather</p>
            <p className="text-Grayscale70 flex text-12 mb-3">
              <img src={film}></img>Crime • Drama
            </p>
            <p className="flex">
              <img src={star}></img>9.2
            </p>
          </div>
        </div>
        <div className="flex ml-8 mr-8">
          <p className="text-56 mr-5 mt-5">3</p>
          <img className="mr-5" src="https://lh3.google.com/u/0/d/1GN4oHFyyuaagjUlGXsAuUB3RyOczjduv=w1676-h1510-iv1"></img>
          <div className="Content">
            <button className="bg-white-50 text-Grayscale60 font-normal py-1 px-2 border border-E9EBED-700 rounded-xl">PG-13</button>
            <p className="text-16 font-bold my-3">The Dark Knight.</p>
            <p className="text-Grayscale70 flex text-12 mb-3">
              <img src={film}></img>Action • Crime
            </p>
            <p className="flex">
              <img src={star}></img>9.0
            </p>
          </div>
        </div>
      </div>
      {/*Best of Action */}
      <div className="ml-8 mt-5 text-24 font-bold">Best of Action</div>
      <div className="flex ml-10">
        <div className="mr-10">
          <img className="w-264 mt-5 h-40" src={one}></img>
          <div className="Content-2">
            <p className="text-16 font-bold my-3">The Man from Toronto</p>
            <p className="img-star">
              <img className="img-star-p" src={star}></img> 4.6{" "}
              <p className="action-p"> | Action • Movie</p>
            </p>
          </div>
        </div>
        <div className="mr-10">
          <img className="w-264 mt-5 h-40" src={two}></img>
          <div className="Content-2">
            <p className="text-16 font-bold my-3"> Extraction</p>
            <p className="img-star">
              <img className="img-star-p" src={star}></img> 4.6{" "}
              <p className="action-p"> | Action • Movie</p>
            </p>
          </div>
        </div>
        <div className="mr-10">
          <img className="w-264 mt-5 h-40" src={three}></img>
          <div className="Content-2">
            <p className="text-16 font-bold my-3">Godzilla: King of the Monsters</p>
            <p className="img-star">
              <img className="img-star-p" src={star}></img> 4.6{" "}
              <p className="action-p"> | Action • Movie</p>
            </p>
          </div>
        </div>
        <div className="mr-10">
          <img className="w-264 mt-5 h-40" src={four}></img>
          <div className="Content-2">
            <p className="text-16 font-bold my-3">Jumanji: The Next Level</p>
            <p className="img-star">
              <img className="img-star-p" src={star}></img> 4.6{" "}
              <p className="action-p"> | Action • Movie</p>
            </p>
          </div>
        </div>
        
      </div>
      {/*------------ */}
      <div className="flex ml-10">
        <div className="mr-10">
          <img className="w-264 mt-5 h-40" src={one}></img>
          <div className="Content-2">
            <p className="text-16 font-bold my-3">Yaksha: Ruthless Operations</p>
            <p className="img-star">
              <img className="img-star-p" src={star}></img> 4.6{" "}
              <p className="action-p"> | Action • Movie</p>
            </p>
          </div>
        </div>
        <div className="mr-10">
          <img className="w-264 mt-5 h-40" src={two}></img>
          <div className="Content-2">
            <p className="text-16 font-bold my-3">Mechanic: Resurrection</p>
            <p className="img-star">
              <img className="img-star-p" src={star}></img> 4.6{" "}
              <p className="action-p"> | Action • Movie</p>
            </p>
          </div>
        </div>
        <div className="mr-10">
          <img className="w-264 mt-5 h-40" src={three}></img>
          <div className="Content-2">
            <p className="text-16 font-bold my-3">The Pirates: The Last Royal...</p>
            <p className="img-star">
              <img className="img-star-p" src={star}></img> 4.6{" "}
              <p className="action-p"> | Action • Movie</p>
            </p>
          </div>
        </div>
        <div className="mr-10">
          <img className="w-264 mt-5 h-40" src={four}></img>
          <div className="Content-2">
            <p className="text-16 font-bold my-3">6 Underground</p>
            <p className="img-star">
              <img className="img-star-p" src={star}></img> 4.6{" "}
              <p className="action-p"> | Action • Movie</p>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
