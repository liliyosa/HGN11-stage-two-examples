import Content from "../components/Content";
import FrameComponent7 from "../components/FrameComponent7";
import "./MobileApp.css";

const MobileApp = () => {
  return (
    <div className="mobile-app">
      <div className="mobile-app-child" />
      <div className="fries-blue-background-with-cop-parent">
        <img
          className="fries-blue-background-with-cop-icon1"
          alt=""
          src="/friesbluebackgroundwithcopyspace@2x.png"
        />
        <img
          className="frame-child3"
          loading="lazy"
          alt=""
          src="/group-351.svg"
        />
      </div>
      <Content />
      <main className="content-body">
        <section className="frame-group">
          <div className="snack-items-parent">
            <div className="snack-items">
              <div className="delight-your-taste-buds-check-parent">
                <div className="delight-your-taste2">
                  Delight Your Taste Buds, check out our snacks
                </div>
                <div className="burgers-donuts">
                  <div className="burgers-donuts-items">
                    <div className="burgers-donuts-names">
                      <img
                        className="tasty-burger-isolated-white-ba-icon1"
                        loading="lazy"
                        alt=""
                        src="/tastyburgerisolatedwhitebackgroundfreshhamburgerfastfoodwithbeefcheese2@2x.png"
                      />
                      <div className="donuts">
                        <div className="donuts-child" />
                        <div className="burger1">Burger</div>
                      </div>
                    </div>
                    <div className="empty-fast-food-name">
                      <b className="empty-fast-food">$35</b>
                    </div>
                  </div>
                  <div className="burgers-donuts-items1">
                    <FrameComponent7
                      deliciousDonuts="/deliciousdonuts2@2x.png"
                      donuts="Donuts"
                    />
                    <div className="wrapper">
                      <b className="b">$35</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chicken-shawarma">
                <div className="chicken-shawarma-items">
                  <div className="chicken-shawarma-names">
                    <div className="chicken-shawarma-names-child" />
                    <div className="fried-chicken">Fried Chicken</div>
                    <div className="shawarma">
                      <div className="wrapper-close-up-fried-chicken">
                        <img
                          className="close-up-fried-chicken-drumsti-icon1"
                          alt=""
                          src="/closeupfriedchickendrumsticks@2x.png"
                        />
                      </div>
                      <img
                        className="blueberry-biscuit-pies-icon1"
                        loading="lazy"
                        alt=""
                        src="/blueberrybiscuitpies@2x.png"
                      />
                    </div>
                  </div>
                  <div className="pancake-fish">
                    <b className="pancake-fish-names">$45</b>
                  </div>
                </div>
                <div className="biscuits-cake">
                  <div className="biscuits-cake-names">
                    <div className="biscuits-cake-names-child" />
                    <div className="biscuits">Biscuits</div>
                  </div>
                  <div className="empty-snack-name">
                    <b className="empty-snack">$15</b>
                  </div>
                </div>
              </div>
              <div className="chicken-shawarma1">
                <div className="frame-container">
                  <div className="rectangle-container">
                    <div className="frame-child4" />
                    <div className="shawarma1">Shawarma</div>
                    <img
                      className="side-view-shawarma-with-fried-icon"
                      loading="lazy"
                      alt=""
                      src="/sideviewshawarmawithfriedpotatoesboardcookware@2x.png"
                    />
                  </div>
                  <FrameComponent7
                    deliciousDonuts="/kegspancakeswithredfish@2x.png"
                    donuts="Pancakes"
                    propGap="5px"
                  />
                </div>
                <div className="chicken-shawarma-inner">
                  <div className="cake-parent">
                    <b className="cake">$30</b>
                    <b className="cake1">$40</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent1">
              <div className="frame-child5" />
              <div className="frame-child6" />
            </div>
          </div>
          <div className="fries-container-wrapper">
            <div className="fries-container">
              <div className="fries-title">
                <div className="fries-image">
                  <img
                    className="delicious-slices-cake-icon1"
                    loading="lazy"
                    alt=""
                    src="/deliciousslicescake@2x.png"
                  />
                  <div className="slice-cake">Slice Cake</div>
                </div>
                <div className="empty-fries">
                  <b className="empty-fries-description">$20</b>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="fries-wrapper">
                  <div className="fries">Fries</div>
                </div>
                <b className="empty-description">$25</b>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MobileApp;
