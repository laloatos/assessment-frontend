import React,{useState,useEffect} from 'react'
import ProductsJson from "../Data/ProductsJson.json"
import UpgradesJson from "../Data/UpgradesJson.json"
function Exercise1() {
    const [products, setProducts] = useState([])
    const [searchProduct, setSearchProduct] = useState("")
    const [searchFinish, setSearchFinish] = useState("")
    const [upgrades, setUpgrades] = useState([])
    const [price, setPrice] = useState("")

    useEffect(() => {
        setProducts(ProductsJson.products)
        setUpgrades(UpgradesJson.upgrades)
    }, [])
    //when change search product or searchfinish to calculate price
    useEffect(()=>{
        searchPrice();
    },[searchProduct,searchFinish])

    const searchPrice = (e) => {
        if(searchProduct!=="" && searchFinish!==""){
            document.getElementById("upgradeTable").hidden=false;

            let car = products.find((product)=>product.product===searchProduct);
            car=car.finishes.find((finish)=>finish.finish===searchFinish).price;
            setPrice(car);
            
        }else{
            document.getElementById("upgradeTable").hidden=true;
            setPrice("");
        }
        
    }
    const getRows = () => {
        let productsRows = [];
        for (let i = 0; i < products[0].finishes.length; i++) {
            let objectRows = {};
            objectRows.finish = products[0].finishes[i].finish;
            for (let j = 0; j < products.length; j++) {
                objectRows["price" + j] = products[j].finishes[i].price;
            }
            productsRows.push(objectRows);
        }
        return productsRows
    }
    
    const addUpgrade=(upgradePrice,id)=>{
        setPrice(Number(price)+Number(upgradePrice))
        //
        document.getElementById(`Add${id}`).hidden=true;
        document.getElementById(`Remove${id}`).hidden=false;
    }
    const removeUpgrade=(upgradePrice,id)=>{
        setPrice(Number(price)-Number(upgradePrice))
        document.getElementById(`Add${id}`).hidden=false;
        document.getElementById(`Remove${id}`).hidden=true;
    }
    return (
        <>
            <h1>Exercise 1</h1>
            <p>Car Price: ${price}</p>
            <select value={searchProduct} onChange={(e) => (setSearchProduct(e.target.value))}>
                <option value="">Select an option</option>
                {
                    products.map((product, index) =>
                        <option key={index} value={product.product}>{product.product}</option>
                    )
                }
            </select>
            <select value={searchFinish} onChange={(e) => (setSearchFinish(e.target.value))}>
                <option value="">Select an option</option>

                {products.length > 0 ? products[0].finishes.map((finish, index) => (
                    <option key={index} value={finish.finish}>{finish.finish}</option>
                )) : null}
            </select>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Finish</th>
                        {products.map((product, index) => (
                            <th key={index}>{product.product}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? getRows().map((row, index) =>
                        <tr key={index}>
                            <td >{row.finish}</td>
                            <td >{row.price0}</td>
                            <td >{row.price1}</td>
                            <td >{row.price2}</td>
                            <td >{row.price3}</td>
                            <td >{row.price4}</td>
                            <td >{row.price5}</td>
                            <td >{row.price6}</td>
                        </tr>
                    ) : null}
                </tbody>
            </table>
            <table className="table table-striped" id="upgradeTable">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="">
                    {upgrades.map(
                        (upgrade, index) => (
                            <tr key={index}>
                                <td>{upgrade.upgrade}</td>
                                <td>{upgrade.price}</td>
                                <td>
                                    <button id={`Add${index}`}
                                    onClick={()=>{addUpgrade(upgrade.price,index)}}
                                    >Add</button>
                                    <button hidden={true} 
                                    id={`Remove${index}`} 
                                    onClick={()=>{removeUpgrade(upgrade.price,index)}}
                                    >Remove</button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Exercise1