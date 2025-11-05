import { useState } from 'react';
import SectionHeader from './SectionHeader'
import GitHubCalendar from "react-github-calendar";



const GithubContributions = () => {
    const [contrubutionYear, setContributionYear] = useState(2023);

    return (
        <div id='GithubContributions'>
            <SectionHeader heading="Github Contribution" />
            <div id='contrubutionContainer'>
                <GitHubCalendar
                    username="ShubhamJoshii"
                    showWeekdayLabels={true}
                    year={contrubutionYear}
                    blockSize={14}
                    blockMargin={4}
                    color="#00ff99"
                    fontSize={14}
                    colorScheme="dark"
                    style={{ zIndex: "99" }}
                />
                <div className='selectYear'>
                    {
                        [2025, 2024, 2023, 2022].map((year) => <button
                            key={year}
                            className={year === contrubutionYear ? "active" : ""}
                            onClick={() => setContributionYear(year)}>
                            {year}
                        </button>)
                    }
                </div>
            </div>


        </div>
    )
}

export default GithubContributions