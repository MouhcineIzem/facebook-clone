import React from 'react';
import "./feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";


function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
            profilePic="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/14141789_1165740856832870_5558366138713260472_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=p4o9JDGZVXEAX9oFt2n&_nc_ht=scontent-cdg2-1.xx&oh=ef1b9b22e1621c1cb55f43805ed85777&oe=5F7A8762"
            username="Mouhcine Bannani"
            message="Hello every one this is me Mouhcine!!.."
            image="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/p960x960/118420427_10159191299039528_5781076883284418507_o.jpg?_nc_cat=104&_nc_sid=da1649&_nc_ohc=7EL5r_ZbWFwAX_QlT_x&_nc_ht=scontent-cdg2-1.xx&tp=6&oh=13240a1326f5ba8ab02ff4d292f9e29c&oe=5F79D194"
            />
            <Post 
            profilePic="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/71386033_3034694173227250_2716914505207513088_n.jpg?_nc_cat=1&_nc_sid=85a577&_nc_ohc=GvLDGEQHnJYAX-F1G5l&_nc_ht=scontent-cdg2-1.xx&oh=a383ad8777cae99580c371ed34f5f228&oe=5F7B4BB2"
            username="Aj-Doc"
            message="Uhryn Larysa - mislaw"
            image="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/p960x960/118920896_3932418560121469_3264146539608155585_o.jpg?_nc_cat=1&_nc_sid=8024bb&_nc_ohc=mZRowS3QLiIAX_fvhX6&_nc_ht=scontent-cdg2-1.xx&tp=6&oh=5ecc2cc5949765439f497e73f0d9f756&oe=5F792F4F"
            />
            <Post 
            profilePic="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/s960x960/118923714_710214586244525_371698406702722515_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=Ijtd-eBMSCEAX_Pd1r7&_nc_oc=AQnaVwmohYWoTELrVsqN3k8ZrtnxS2A9F31HQ4F58ISrRNUOpayNQPKmoT0c7knOPhQ&_nc_ht=scontent-cdt1-1.xx&tp=7&oh=f85283ae49b6a44c3263e4e2f4b3bd89&oe=5F7B8F0F"
            username="Rabab Oklama"
            message="voici mon cheesecake au chocolat , sans cuisson , crémeux , facile à faire à la maison et très délicieux .Je suis sur que les amoureux du chocolat vont trouver leur bonheur avec ce cheesecake .Alors pour voir la recette et la préparation attendez ma video demain à 16:00 h sur ma chaine youtube BeBo's dish"
            image="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/p720x720/118834437_710218966244087_3013668743954852487_o.jpg?_nc_cat=100&_nc_sid=07e735&_nc_ohc=UTCssj_wWw4AX8bsbee&_nc_ht=scontent-cdg2-1.xx&tp=6&oh=4e8fe9a21a0736daf86f6db5bd3516f5&oe=5F7BA42D"
            />
        </div>
    )
}

export default Feed
