import React from 'react';

const Home = (props) => (
  <div > 
     
    <div style={styles.mainMessage}>
        <h1>Everyone is unique in their own way. No one knew about yourself better than you do. 
        So start exploring yourself and choose what suits best for . you</h1>
    </div>
   

    <div style={styles.eatClean}>
        <h1>Eat Clean</h1>
        <h3>Never ever cheat on diet. To reach your fitness goals remember 80% diet and20% is workout. 
            Average person needs 2000 calories/day. I have listed few diet suggestions where you can pick one 
            or mix and match but while doing that put an eye on your macros too.</h3>
    </div>

    <div style={styles.stayHydrated}>
        <h2>Stay Hydrated</h2>
        <h3>we hear this one everywhere but what is it? Why do we need to stay hydrated? 
            Well the amount of protein we consume doesn’t just gets digested or absorbed by the body 
            without the water intake. You need you muscles to stay hydrated so that it could absorb 
            the protein you are consuming otherwise it goes waste (you will poop it out). 
            Minimum water intake Is said to be a gallon/day but again it varies from person to person.</h3>
    </div>

    <div style={styles.goHardOrGoHome}>
        <h2>Go Hard or Go Home</h2>
        <h3>many of us including me misunderstood this one “Go Hard Or Go Home”. 
            It doesn’t mean that lifting heavy is going hard. It means that the weight you 
            chose to do reps counts like we need to go till failure with the weight we chose and failure 
            in the sense where we will not be able to proceed to perform anymore reps, you need to feel 
            the burn and pain for that particular muscle. For example consider exercise bench press with 
            45lbs weight plate on each side, now it’s about how hard you have gone on the reps, was 40reps 
            easy or tried very hard to get 40reps is what it matters.</h3>
    </div>

    <div style={styles.mindMuscleConnection}>
        <h2>Mind Muscle Connection</h2>
        <h3>when we perform a workout think why we are doing it, what muscle does the exercise target and activate. 
            Concentrate on the muscle group you are working out. Slow and Controlled way of doing the exercise is 
            very important in order to avoid injuries. For example, consider we are doing bench press exercise, 
            take 2secs to get the barbell down to your chest and 1sec to push it up. Squeeze the muscle group
            which you are training at the end of each rep. when we perform a workout think why we are doing it,
            what muscle does the exercise target and activate. Concentrate on the muscle group you are working out. 
            Slow and Controlled way of doing the exercise is very important in order to avoid injuries. For example,
            consider we are doing bench press exercise, take 2secs to get the barbell down to your chest and 1sec to 
            push it up. Squeeze the muscle group which you are training at the end of each rep.</h3>
    </div>

    <div style={styles.consistencyPatienceDedicationPreparation}>
        <h2>Consistency, Patience, Dedication, Preparation</h2>
        <h3>without these things the above principles wouldn’t work at all. You need to be consistent 
            in your workout, do not expect results in just 30 or 45 days because great things take lot of 
            time, so be patient. You need to be dedicated in your workout and diet and lot of preparation. 
            Going with a plan for your workout makes a lot of difference.</h3>
    </div>

    <div style={styles.rest}>
        <h2>Rest</h2>
        <h3>Rest is very important for our body for muscle repair. If you train, eat and sleep 
            right you can work out 7days a week. When you rest it not that you can cheat on diet 
            it about giving your body time to recover so that when you hit the gym the next day 
            stronger than before.</h3>
    </div>

  </div>
)

const styles = {
    mainMessage: {
        height: '91vh',
        display: 'flex',
        marginBottom: 20,
        alignItems: 'center',
        color: 'white',
        padding: '5%',
        backgroundImage: 'url("http://jpt-personal-trainer.webs.com/fitness-motivation-16362.jpg")',
        boxShadow: '0px 6px 10px 5px rgba(0,0,0,0.35)',
        backgroundSize: '100% 100%',
        overflowY: 'scroll'
        
    },
    eatClean: {
        height: 500,
        marginBottom: 20,
        padding: '5%',
        boxShadow: '0px 6px 10px 5px rgba(0,0,0,0.35)',
        backgroundImage: 'url("http://www.fitnessreal.es/wp-content/uploads/2017/02/283766-Sepik.jpg")',
        backgroundSize: '100% 100%',
        overflowY: 'scroll',  
        color: 'white'
    },

     stayHydrated: {
        height: 500,
        marginBottom: 20,
        padding: '5%',
        boxShadow: '0px 6px 10px 5px rgba(0,0,0,0.35)',
        backgroundImage: 'url("https://cdn.shutterstock.com/shutterstock/videos/3087235/thumb/4.jpg")',
        backgroundSize: '100% 100%',
        overflowY: 'scroll', 
        color: 'white'
    },

    goHardOrGoHome: {
        height: 500,
        marginBottom: 20,
        padding: '5%',
        boxShadow: '0px 6px 10px 5px rgba(0,0,0,0.35)',
        backgroundImage: 'url("http://www.desansiedad.com/wp-content/uploads/2014/05/desansiedad-por-que-hacerte-el-fuerte-te-debilita-y-dejarte-sentir-te-fortalece.jpg")',
        backgroundSize: '100% 100%',
        overflowY: 'scroll',   
        color: 'white'
    },

    mindMuscleConnection: {
        height: 500,
        marginBottom: 20,
        padding: '5%',
        boxShadow: '0px 6px 10px 5px rgba(0,0,0,0.35)',
        backgroundImage: 'url("http://www.grypit.com/images/blog/pic-blog-1.jpg")',
       backgroundSize: '100% 100%',
        overflowY: 'scroll',   
        color: 'white'
    },

    consistencyPatienceDedicationPreparation: {
        height: 500,
        marginBottom: 20,
        padding: '5%',
        boxShadow: '0px 6px 10px 5px rgba(0,0,0,0.35)',
        backgroundImage: 'url("http://cdn2.bigcommerce.com/n-biq04i/gybma/images/stencil/1280x650/uploaded_images/adobestock-119530146.jpeg")',
        backgroundSize: '100% 100%',
        overflowY: 'scroll',   
        color: 'white'
    },

    rest: {
        height: 500,
        marginBottom: 20,
        padding: '5%',
        boxShadow: '0px 6px 10px 5px rgba(0,0,0,0.35)',
        backgroundImage: 'url("https://s-media-cache-ak0.pinimg.com/originals/48/fe/dc/48fedc816654ae6663c74069b6846b86.jpg")',
        backgroundSize: '100% 100%',
        overflowY: 'scroll',   
        color: 'white'
    }
}

export default Home;