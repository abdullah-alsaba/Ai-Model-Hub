import "../index.css"

const Loading = () => {
    return (
      <div>
        <div className=" flex items-center justify-center bg-base-100">
          <span className="loading loading-spinner loading-xl text-red-600"></span>
        </div>
      </div>
    );
};

export default Loading;