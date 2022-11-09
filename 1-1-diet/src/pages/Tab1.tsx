import { IonButton, IonCard,  IonHeader, IonPage, IonTitle, IonToolbar,IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';

const slideOpts = {
  initialSlide: 4,
  speed: 1100,
  loop: true,
  
};


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>1:1 Diet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
  
    <IonSlides className='test' pager={true} options={slideOpts} >
      <IonSlide>
     
        <IonCard className='cardeen'>
            <div className='logoeen'>
            </div>
            <div className='textbox'>
            <IonText>
            <h5 className='cardeentext'>Met The 1:1 Diet val je af en ga je naar een gezonde leefstijl, voor nu én later!</h5>
            </IonText>

            <IonButton className='button' color="secondary">
              <h5>Lees meer</h5>
            </IonButton>
            </div>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard className='cardtwee'>
            <div className='logotwee'>
            </div>
            <div className='textbox'>
            <IonText>
            <h5 className='cardtweetext'>Met The 1:1 Diet val je af en ga je naar een gezonde leefstijl, voor nu én later!</h5>
            </IonText>

            <IonButton color="secondary">
              <h5>Lees meer</h5>
            </IonButton>
            </div>
        
        </IonCard>
   
      </IonSlide>
      
   
    </IonSlides>
 

      </IonContent>
      
    </IonPage>
    
  );
};

export default Tab1;
