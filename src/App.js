import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import './App.css';
import BannerName from './components/BannerName';
import Header from './components/Header';
import MenuCard from './components/MenuCard';
import MenuContainer from './components/MenuContainer';
import SubMenuContainer from './components/SubMenuContainer';
import delivery from './img/papas.png';
import { MenuItems, Items } from './components/Data';
import ItemsCard from './components/ItemsCard';
import DebitCard from './components/DebitCard';
import CartItem from './components/CartItem';
import { useStateValue } from './components/StateProvider';
import Swal from 'sweetalert2'
import 'animate.css';
import mac from './img/mac.png';

function App() {

  const [isMainData, setIsMainData] = useState(
    Items.filter(element => element.itemId === 'buger01')
  )

  const [{ cart }, dispatch] = useStateValue()

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li')
    function setMenuActive(){
      menuLi.forEach((n) => {
        n.classList.remove('active')
      })
      this.classList.add('active')
    }
    menuLi.forEach((n) => n.addEventListener('click', setMenuActive))

    const menuCards = document.querySelector('.rowContainer').querySelectorAll('.rowMenuCard')
    function setMenuCardActive(){
      menuCards.forEach((n) => {
        n.classList.remove('active')
      })
      this.classList.add('active')
    }
    menuCards.forEach((n) => n.addEventListener('click', setMenuCardActive))
  }, [isMainData, cart])

  const setData = (itemId) => {
    setIsMainData(Items.filter((element) => element.itemId === itemId));
  }

  const handleCompra = () => {
    Swal.fire({
      imageUrl: `${mac}`,
      imageWidth: 400,
      imageHeight: 200,
      title: 'Compra realizada con Éxito!',
      text: 'Te avisaremos cuando el pedido esté en camino!',
      showConfirmButton: false,
      timer: 2900,
      showClass: {
        popup: 'animate__animated animate__zoomInDown'
        },
      hideClass: {
        popup: 'animate__animated animate__zoomOutUp'
        }
    })
  }

  return (
    <div className="App">
      <Header/>

      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"Matias"} discount={"20%"} link={"#"} />
            <img src={delivery} alt="banner" className="deliveryPick" />
          </div>

          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Categorias de Menú"}/>
            </div>

            <div className="rowContainer">
              {MenuItems && MenuItems.map(data => (
                <div key={data.id} onClick={() => setData(data.itemId)}>
                  <MenuCard imgSrc={data.imgSrc} name={data.name} isActive={data.id === 1 ? true : false} />
                </div>
              ))}
            </div>

            <div className="dishItemContainer">
              {isMainData && isMainData.map(data => (
                <ItemsCard key={data.id} itemId={data.id} imgSrc={data.imgSrc} name={data.name} ratings={data.ratings} price={data.price} />
              ))}
            </div>
          </div>
        </div>

        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart ? <div></div> : (
          <div className="cartCheckOutContainer">
          <SubMenuContainer name={"Tu Carrito"} />
            <div className="cartContainer">

              <div className="cartItems">
                {cart && cart.map(data => (
                  <CartItem
                  key={data.id}
                  itemId={data.id}
                  name={data.name}
                  imgSrc={data.imgSrc}
                  price={data.price}
                  />
                ))}
                
              </div>
            </div>

            <div className="totalSectiom">
              <h3>Total</h3>
              <p>
                <span>$ </span>
                {cart && cart.reduce((acc, item) => acc + parseFloat(item.price), 0)}
              </p>
            </div>

            <button className="checkOutBtn" onClick={handleCompra}>
              Confirmar Compra
            </button>
          </div>
          )}
        </div>
      </main>

      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded/>} isHome/>
          <MenuContainer link={"#"} icon={<Chat/>}/>
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded/>}/>
          <MenuContainer link={"#"} icon={<Favorite/>}/>
          <MenuContainer link={"#"} icon={<SummarizeRounded/>}/>
          <MenuContainer link={"#"} icon={<Settings/>}/>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
