import React from 'react';
import './Learning.css';
import cousera from '../../images/cousera.jpg';
import edx from '../../images/edx.jpg';
import practicum from '../../images/practicum.jpg';
import codewar from '../../images/codewar.jpg';

export default function Learning() {
  return (
    <main className="content">
      <section className="learning">
        <h2 className="learning__text lobster">--- Learning Track ---</h2>
        <ul className="learning__box">
          <li className="learning__item">
            <a
              href="https://practicum.yandex.com/web/?utm_source=google&utm_medium=cpc&utm_campaign=Google_Search_USA_Web_Smart&utm_content=%7Badgroupid%7D&utm_term=%7Bkeyword%7D&gclid=Cj0KCQiAwMP9BRCzARIsAPWTJ_FpMsIIbpj2-ZBhnK4lFjSUeQJ9ZoXMWsiZ0ugcTtZIDm50y0Fjg6EaAmuGEALw_wcB"
              target="_blank"
              rel="noreferrer"
              className="learning__item-link"
            >
              <img
                src={practicum}
                className="learning__item-img"
                alt="project"
              />
            </a>
            <div className="learning__item-textbox">
              <h3 className="learning__item-title lobster">
                I learned from Practicum by Yandex.
              </h3>
              <p>
                In 2020, I was fortunately selected to be part of practicum by
                yandex beta-test program-a intensive 10-month course in web
                development that covers HTML, CSS, JavaScript, React, back-end
                infrastructure, and more. Throughout the curriculum, I developed
                essential soft skills by working projects with hard deadlines. I
                am now working at the final project and will finished the
                program at the end of December.
              </p>
            </div>
          </li>
          <li className="learning__item">
            <a
              href="https://www.coursera.org/"
              target="_blank"
              rel="noreferrer"
              className="learning__item-link"
            >
              <img src={cousera} className="learning__item-img" alt="project" />
            </a>
            <div className="learning__item-textbox">
              <h3 className="learning__item-title lobster">
                I learned from Cousera.
              </h3>
              <p>
                I love coursera that I could access so many courses from lots of
                top schools. I learned my first programing language there and
                love coding since.
              </p>
              <h4 className="learning__item-subtitle">Certificate I earned</h4>
              <ul className="learning__item-list">
                <li>
                  <a
                    href="https://coursera.org/share/74a7f31847b93e3090fd3c91031f6a46"
                    target="_blank"
                    rel="noreferrer"
                    className="learning__item-link"
                  >
                    SQL for Data Science
                  </a>{' '}
                  by University of California, Davis
                </li>
                <li>
                  <a
                    href="https://coursera.org/share/38dc9e56fc6d6824d27cadbc44a2fb78"
                    target="_blank"
                    rel="noreferrer"
                    className="learning__item-link"
                  >
                    Introduction to Programming with MATLAB
                  </a>{' '}
                  by Vanderbilt University
                </li>
              </ul>
              <h4 className="learning__item-subtitle">Courses I completed</h4>
              <ul className="learning__item-list">
                <li>
                  <a
                    href="https://www.coursera.org/learn/python-databases"
                    target="_blank"
                    rel="noreferrer"
                    className="learning__item-link"
                  >
                    Using Python to Access Web Data
                  </a>{' '}
                  by University of Michigan
                </li>
                <li>
                  <a
                    href="https://www.coursera.org/learn/python-network-data"
                    target="_blank"
                    rel="noreferrer"
                    className="learning__item-link"
                  >
                    Using Databases with Python
                  </a>{' '}
                  by University of Michigan
                </li>
                <li>
                  <a
                    href="https://www.coursera.org/learn/python-data"
                    target="_blank"
                    rel="noreferrer"
                    className="learning__item-link"
                  >
                    Python Data Structures
                  </a>{' '}
                  by University of Michigan
                </li>
              </ul>
            </div>
          </li>
          <li className="learning__item">
            <a
              href="https://www.edx.org/"
              target="_blank"
              rel="noreferrer"
              className="learning__item-link"
            >
              <img src={edx} className="learning__item-img" alt="project" />
            </a>
            <div className="learning__item-textbox">
              <h3 className="learning__item-title lobster">
                I learned from Edx.
              </h3>
              <p>
                I audited the famous{' '}
                <a
                  href="https://cs50.harvard.edu/college/2020/fall/"
                  target="_blank"
                  rel="noreferrer"
                  className="learning__item-link"
                >
                  CS50 course
                </a>{' '}
                offered by Harvard University from Edx. It was a mind browing
                experience. I learned fundamental knowledge of computer science
                with a big picture in such a short time and all the coding and
                programming suddenly made more sense to me. I finished most of{' '}
                <a
                  href="https://github.com/iceicery/HarvardX----CS50"
                  target="_blank"
                  rel="noreferrer"
                  className="learning__item-link"
                >
                  the assignments
                </a>{' '}
                and I enjoyed the challenge of each of them.{' '}
              </p>
            </div>
          </li>
          <li className="learning__item">
            <a
              href="https://www.codewars.com/"
              target="_blank"
              rel="noreferrer"
              className="learning__item-link"
            >
              <img src={codewar} className="learning__item-img" alt="project" />
            </a>
            <div className="learning__item-textbox">
              <h3 className="learning__item-title lobster">
                I practice on Codewar.
              </h3>
              <p>
                I enjoy practicing on codewar.I love that you could only access
                others’ code if you pass the challenge on your own. I learned a
                lot through the process of independent thinking and aha moments
                while I saw others' better approach.
              </p>
              <img
                className="learning__img"
                alt="codewar rank"
                src="https://www.codewars.com/users/Pw%20Amy%20Wu/badges/large"
              />
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
