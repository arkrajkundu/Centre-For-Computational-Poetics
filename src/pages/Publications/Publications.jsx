import React from 'react'
import './Publications.css'
import Publication from '../../components/Publication/Publication'

const Publications = () => {
  return (
    <>
      <div className='journal-publications'>
        <Publication publicationDetail={"Naaz K. and Singh N.K. (2023) A seminatural approach towards restoration, classification, and pattern extraction from heritage Hindi poetry: A probabilistic case study with doha chanda. Digital Scholarship in the Humanities (June 2023), Oxford University Press. Accepted. Online ISSN: 2055-768X, Print ISSN 2055-7671, Indexing: SSCI [IF 1.299]"} />
        <Publication publicationDetail={"Singh N.K., Naaz K. and Chakraborty S (2023) Komala and Kathora: A Novel Approach Towards Classification of Hindi Poetry. ACM Transactions on Asian and Low-Resource Language Information Processing (2023), EISSN: 2375-4702, ISSN 2375-4699. Indexing: SCIE [IF 1.92] (Accepted) https://doi.org/10.1145/3589249"} />
        <Publication publicationDetail={"Naaz K. and Singh N.K. (2023) A learning approach towards metre-based classification of similar Hindi poems using proposed two-level data transformation. Digital Scholarship in the Humanities (2023), Oxford University Press. fqad011, https://doi.org/10.1093/llc/fqad011, Online ISSN: 2055-768X, Print ISSN 2055-7671, Indexing: SSCI [IF 1.299]"} />
        <Publication publicationDetail={"Naaz K. and Singh N. K. (2022) Design and Development of Computational Tools for Analyzing Elements of Hindi Poetry. IEEE Access (2022), Electronic ISSN: 2169-3536, doi: 10.1109/ACCESS.2022.3204388. Indexing: SCIE [IF 3.476]"} />
        <Publication publicationDetail={"Prakash A., Singh, N.K., Saha, S.K. (2022). Automated extraction of similar poetry for study of literary texts: An experiment on Hindi poetry, ETRI journal (2022), 1-13. Online ISSN: 2233-7326. http://doi.org/10.4218/etrij.2019-0396. Wiley. Indexing: SCIE [IF 1.347]"} />
        <Publication publicationDetail={"Singh, N.K., Chakraborty, S., and Roy M, (2021). Analysing the poetic structure of Jana-Gana-Mana in Entirety: A statistical approach. Journal of Applied Mathematics and Computation, Vol. 5, No. 4, pp. 264-272. ISSN online: 2576-0653, ISSN print: 2576-0645."} />
      </div>
      <div className="conference-publications">
        <Publication publicationDetail={"Naaz, K., and Singh, N.K., 2023. Design and development of an automated tool for determining the presence and extent of rhyme in free verse. 12th International Conference on Advances in Computer Science and Application - CSA, Bengaluru, India. March 2023."} />
      </div>
      <div className="patents"></div>
    </>
  )
}

export default Publications
