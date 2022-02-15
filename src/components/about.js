import React, { Component } from 'react';
import './about.css';

const About=()=>{
    return(
        <div class="about">
            <div class="about-detail">
                <h1>
                    Senper Graphics
                </h1>
                <hr></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere tortor in pulvinar lacinia. Fusce eget odio a ex fermentum semper. Nam laoreet nibh sit amet egestas mollis. Nulla ac felis turpis. Nullam semper varius orci, eget ultrices elit feugiat et. Integer facilisis vel libero nec condimentum. Aenean ut elit felis. Quisque hendrerit, sem ut volutpat interdum, augue velit sagittis purus, vel aliquet metus felis vel ex. Phasellus finibus egestas egestas. Curabitur ut venenatis ipsum. Morbi ut nunc mattis quam pharetra dignissim vitae nec justo. Fusce maximus urna vel nisl luctus sollicitudin.
                </p>
            </div>

            
            <div class="about-designers">
                <a href="{% url 'designer' 'barch' %}">
                    <div class="about-designer">
                        <div class="about-avatar">
                            {/* <img src=" {% static 'img/avatar.jpg' %} " alt=""> */}
                            <div class="about-avatar-title">
                                <h4>Barch barch barch</h4>
                                <p>software enginer</p>
                            </div>
                        </div>
                        <p class="about-designer-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere tortor in pulvinar lacinia. Fusce eget odio a ex fermentum semper. Nam laoreet nibh sit amet egestas mollis. Nulla ac felis turpis. Nullam semper varius orci, eget ultrices elit feugiat et. Integer facilisis vel libero nec condimentum. Aenean ut elit felis.
                        </p>
                    </div>
                </a>


                <div class="about-designer">
                    
                </div>
                <div class="about-designer">
                    
                </div>
            </div>
        </div>
    );
}

export default About;