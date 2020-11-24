import React from 'react';

const Project = (props) => {

    return (
        <section class="col-md-6 col-lg-4 customPadding">
            <div class="card">
                <img src={props.image} class="card-img-top" alt="placeholder" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href={props.link} class="btn btn-primary">View Website</a>
                </div>
            </div>
        </section>
    );
}

export default Project