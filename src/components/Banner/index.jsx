
import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';

const Banner = () => {
    const [products, setProducts] = useState([]);
    const ProductService = {
        getProductsData() {
            return [
                {
                    image:
                        'https://i0.wp.com/www.fvs.edu.br/wp-content/uploads/2020/06/palestraeducacao.png',
                },
                {
                    image:
                        'https://i0.wp.com/www.fvs.edu.br/wp-content/uploads/2020/06/palestraeducacao.png',
                },
                {
                    image:
                        'https://i0.wp.com/www.fvs.edu.br/wp-content/uploads/2020/06/palestraeducacao.png',
                },
            ];
        },
        getProductsSmall() {
            return Promise.resolve(this.getProductsData().slice(0, 10));
        },

        getProducts() {
            return Promise.resolve(this.getProductsData());
        },
    };

    const responsiveOptions = [
        {
            breakpoint: '1600px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    useEffect(() => {
        ProductService.getProductsSmall().then((data) =>
            setProducts(data.slice(0, 3))
        );
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-4 p-5 surface-border text-center border-round ">
                <div className="w-full ">
                    <img src={`${product.image}`} className="w-full h-30rem" />
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}

export default Banner;