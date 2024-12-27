import React from 'react';

const ProductCategory = () => {
    const handleLearnMore = () => {
        // Add your specific action here
        console.log('Learn More button clicked');
    };

    return (
        <div className='flex align-middle justify-center'>
            <div className="flex flex-col md:flex-row w-[80%]">
                <div className="bg-yellow-500 p-4 md:w-1/2">
                    <h2 className="text-white text-2xl font-bold mb-4">Treat acne with science, not hacks.</h2>
                    <p className="text-white">We're building a new model...</p>
                    <p>Descriptive text or concise message related to the image</p>
                    <button onClick={handleLearnMore} className="bg-yellow-500 text-white py-2 px-4 mt-4 border">
                        Learn More
                    </button>
                </div>
                <div className="bg-white p-4 md:w-1/2 ">
                    <img src="https://images.unsplash.com/photo-1732452792153-6d244db8dc01?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" className="w-full mb-4" />
                </div>
            </div>
        </div>

    );
};

export default ProductCategory;
