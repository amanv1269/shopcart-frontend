import React, {useEffect} from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";

import {useDispatch, useSelector} from "react-redux";
import {findProductByCategory} from "../../State/product/Action";
import HomeSectionCarouse from "../components/HomeSectionCarousel/HomeSectionCarouse";


const productData = [
    "mens_kurta",
    "men_jeans",
    "men_shirts",
    "women_top",
    "women_jeans",
];

const HomePage = () => {
    const dispatch = useDispatch();

    // Dispatch action to fetch products by category when component mounts
    useEffect(() => {
        dispatch(findProductByCategory(productData));
    }, [dispatch]);

    // Select product data from the Redux store
    const { products, loading, error } = useSelector(
        (state) => state.productCategory
    );

    return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        {/*<HomeSectionCarouse data={WomensKurti} sectionName={"Women kurti"} />*/}
        {/*<HomeSectionCarouse data={WomensKurti} sectionName={"Women dress"} />*/}
        {/*<HomeSectionCarouse data={WomensKurti} sectionName={"Women shoes"} />*/}
        {/*<HomeSectionCarouse data={WomensKurti} sectionName={"Women clothes"} />*/}
        {/*<HomeSectionCarouse data={WomensKurti} sectionName={"Women fashion"} />*/}
          {productData.map((category, index) => (
          <HomeSectionCarouse
              key={index}
              data={products[category] || []}
              sectionName={category.replace("_", " ")}
              loading={loading[category]}
              error={error[category]}
          />
      ))}


      </div>
    </div>
  );
};

export default HomePage;
