const URL = "https://api.github.com/users/";

const userNameEl = document.getElementById("userName");
const searchBtnEl = document.getElementById("searchBtn");
const centerContainerEl = document.getElementById("centerContainer");
const loaderEl = document.getElementById("loader");

const apiProfile =(profile)=>{
    return(`
                <div class="card">
                    <div class="header">
                        <div class="left">
                            <div class="profile_pic">
                                <img src="${profile.avatar_url}" alt="profile_pic">
                            </div>
                            <div class="profie_name">
                                <h3>${profile.name}</h3>
                                <p>${profile.login}</p>
                            </div>
                        </div>
                        <div class="right">
                            <a href="${profile.html_url}" target="_black">
                                <button class="btn">Check</button>
                            </a>
                        </div>
                    </div>
                    <div class="about">
                        <div>
                            <h3>About</h3>
                            <p>${profile.bio}</p>
                        </div>
                        <div>
                            <h3>E-mail</h3>
                            <p>${profile.email}</p>
                        </div>
                        <div>
                            <h3>Location</h3>
                            <p>${profile.location}</p>
                        </div>
                        <div>
                            <h3>profile update</h3>
                            <p>${profile.updated_at}</p>
                        </div>
                    </div>
                    <div class="status">
                        <div class="follower">
                            <h3>Followers</h3>
                            <p>${profile.followers}</p>
                        </div>
                        <div class="following">
                            <h3>Following</h3>
                            <p>${profile.following}</p>
                        </div>
                        <div class="fork">
                            <h3>Forks</h3>
                            <p>${profile.public_repos}</p>
                        </div>
                    </div>
                </div>`)
};



const fetchProfile = async ()=>{
    const githubName=userNameEl.value;
    try {
        loaderEl.innerHTML="fetching data ...";
        loaderEl.style.color="white";
        const respond =  await fetch(`${URL}${githubName}`);
        const data = await respond.json();
        loaderEl.innerText="";
        if(data){
            centerContainerEl.innerHTML=apiProfile(data);

        }else{
            loaderEl.innerHTML=data.message;
            loaderEl.style.color="red";
            centerContainerEl.innerHTML="";
        }


        console.log(data);
    } catch (error) {
        console.log({error});
        loaderEl.innerText="";
    };
};


searchBtnEl.addEventListener("click",fetchProfile);