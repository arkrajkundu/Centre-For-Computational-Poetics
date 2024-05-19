import React from 'react'
import './SecondSection.css'
import ToolDescription from '../ToolDescription/ToolDescription'
import { assets } from '../../assets/assets'

const SecondSection = () => {
  return (
    <div className='second-section'>
      <h2>Poetry Analyzer Tools</h2>
      <div className="tools-info">
        <ToolDescription className='tool-desc' image={assets.Text2MatraIcon} title={"Text2Mātrā"} desc={"The Text2Mātrā tool provides the numeral scansion for any input text, which can serve as the basis for copious analytical and detection task, such as, to detect chanda type, to detect rhythm pattern, verifying metrical correctness of a given verse, etc."} link={"#"} />
        <ToolDescription className='tool-desc' image={assets.RPaGenIcon} title={"RPaGen"} desc={"The Rhyme Pattern Generator or RPaGen is a tool that can detect the rhyming pattern and access the rhyming quality of input Hindi poems. It can detect three most common types of Hindi metrical compositions."} link={"#"} />
        <ToolDescription className='tool-desc' image={assets.RMaGenIcon} title={"RMaGen"} desc={"In poetry the expression of emotion is not sufficient, for it to reach the state of rasa, its maturity (development) is also necessary. The Rasa Maturity Generator or RMaGen is a tool to detect the extent of maturity of four most common types of rasa in Hindi poems."} link={"#"} />
        <ToolDescription className='tool-desc' image={assets.FoSCalIcon} title={"FoSCal"} desc={"The Figure of Speech Calculator or FoSCal is a tool that can detect and measure the presence and extent of alliteration, a part of enormous figures of speech in Hindi. "} link={"#"} />
        <ToolDescription className='tool-desc' image={assets.FVRCalIcon} title={"FVRGen"} desc={"The FVRCal or Free Verse Rhyme Score Calculator is a tool of the RPaGen family. It does not generate rhyming patterns as free verse composition lacks pattern. It can detect the rhyming pairs, analyse its quality and generate a score for the poem. This score represents the rhyming quality of the poem. "} link={"#"} />
        <ToolDescription className='tool-desc' image={assets.FVFoSCalIcon} title={"FVFoSCal"} desc={"The FVFoSCal or Free Verse Figure of Speech Calculator is a tool of the FoSCal family that can detect the presence and extent of Figure of Speech in free verse composition. The FVFoSCal covers more Figure of Speech than the FoSCal."} link={"#"} />
      </div>
    </div>
  )
}

export default SecondSection
