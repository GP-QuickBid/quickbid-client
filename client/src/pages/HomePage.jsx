export default function HomePage() {
  return (
    <>
      {/* {games.length === 0 ? (
        <>
          <div className="flex justify-center items-center h-full">
            <img src={loading} alt="" />
          </div>
        </>
      ) : (
        <></>
      )} */}
      <div id="PAGE-HOME" className="p-3">
        <main className="grid grid-cols-2 gap-5 px-10 my-8">
          {/* Card Section*/}
          <div className="card bg-base-300 shadow flex flex-row">
            <figure className="flex flex-col">
              <img
                src="https://www.dexerto.com/cdn-cgi/image/width=800,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/08/kda-return-new-song-the-baddest-announce-ep.png"
                alt="product image"
                className="max-w-xs h-3/4 rounded-lg shadow ml-5"
              />
            </figure>
            <div className="card-body flex-1">
              <b>Title</b>
              <hr />
              <div>
                <i className="fa-solid fa-user" /> fullName
              </div>
              <div>
                <i className="fa-solid fa-book" /> Description
              </div>
              <div>
                <i className="fa-solid fa-circle" /> Status
              </div>
              <div>
                <i className="fa-solid fa-dollar-sign" /> Price
              </div>
              <button className="btn btn-success btn-sm w-full mt-2 bg-green-500">
                Bid
              </button>
              <button className="btn btn-error btn-sm w-full mt-2">
                Delete
              </button>
            </div>
          </div>
          <div className="card bg-base-300 shadow flex flex-row">
            <figure className="flex flex-col">
              <img
                src="https://www.dexerto.com/cdn-cgi/image/width=800,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/08/kda-return-new-song-the-baddest-announce-ep.png"
                alt="product image"
                className="max-w-xs h-3/4 rounded-lg shadow ml-5"
              />
            </figure>
            <div className="card-body flex-1">
              <b>Title</b>
              <hr />
              <div>
                <i className="fa-solid fa-user" /> fullName
              </div>
              <div>
                <i className="fa-solid fa-book" /> Description
              </div>
              <div>
                <i className="fa-solid fa-circle" /> Status
              </div>
              <div>
                <i className="fa-solid fa-dollar-sign" /> Price
              </div>
              <button className="btn btn-success btn-sm w-full mt-2 bg-green-500">
                Bid
              </button>
              <button className="btn btn-error btn-sm w-full mt-2">
                Delete
              </button>
            </div>
          </div>
          <div className="card bg-base-300 shadow flex flex-row">
            <figure className="flex flex-col">
              <img
                src="https://www.dexerto.com/cdn-cgi/image/width=800,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/08/kda-return-new-song-the-baddest-announce-ep.png"
                alt="product image"
                className="max-w-xs h-3/4 rounded-lg shadow ml-5"
              />
            </figure>
            <div className="card-body flex-1">
              <b>Title</b>
              <hr />
              <div>
                <i className="fa-solid fa-user" /> fullName
              </div>
              <div>
                <i className="fa-solid fa-book" /> Description
              </div>
              <div>
                <i className="fa-solid fa-circle" /> Status
              </div>
              <div>
                <i className="fa-solid fa-dollar-sign" /> Price
              </div>
              <button className="btn btn-success btn-sm w-full mt-2 bg-green-500">
                Bid
              </button>
              <button className="btn btn-error btn-sm w-full mt-2">
                Delete
              </button>
            </div>
          </div>
          <div className="card bg-base-300 shadow flex flex-row">
            <figure className="flex flex-col">
              <img
                src="https://www.dexerto.com/cdn-cgi/image/width=800,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/08/kda-return-new-song-the-baddest-announce-ep.png"
                alt="product image"
                className="max-w-xs h-3/4 rounded-lg shadow ml-5"
              />
            </figure>
            <div className="card-body flex-1">
              <b>Title</b>
              <hr />
              <div>
                <i className="fa-solid fa-user" /> fullName
              </div>
              <div>
                <i className="fa-solid fa-book" /> Description
              </div>
              <div>
                <i className="fa-solid fa-circle" /> Status
              </div>
              <div>
                <i className="fa-solid fa-dollar-sign" /> Price
              </div>
              <button className="btn btn-success btn-sm w-full mt-2 bg-green-500">
                Bid
              </button>
              <button className="btn btn-error btn-sm w-full mt-2">
                Delete
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
