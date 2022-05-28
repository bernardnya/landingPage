import {SectionWrapper, Features, Download} from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title = "Your Favorite Place to find the best"
        description = "Buy, share, rent  everything goes 25 + thousand people our service"
        showBtn 
        mockupImg={assets.homeHero}
        banner ="banner"
      />
      {/* next secton */}
      <SectionWrapper
        title = "Fast and Easiest way to find a place to rent"
        description = "Easy to use, few clicks, roam & find cool rooms in Ghana all on your Phone" 
        mockupImg={assets.homeCards}
        reverse
      />  
      <Features />

      <SectionWrapper
        title = "Deployment"
        description = "Buy, share, rent  everything goes 25 + thousand people our service"
        mockupImg={assets.feature}
        reverse
      />
       <SectionWrapper
        title = "Creative"
        description = "Easy to use, few clicks, roam & find cool rooms in Ghana all on your Phone" 
        mockupImg={assets.mockup}
        banner="banner02"
      />  
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary} flex-col text-center banner04">
        <p className={`${styles.whiteText} ${styles.pText}`}>
        Made by {" "}
        <span className='bold'> Bernard</span>
      </p>
      </div>
    </>
  );
}

export default App;
