import "../../index.css"

const Model = ({ model }) => {
    console.log(model)
    return (
        <div>
            <div>
                <img src={model.image} alt={model.title} />
            </div>
        </div>
    );
};

export default Model;