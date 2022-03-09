import React from 'react'
import './Security.scss'

function Security() {
  return (
    <>
    

    <b> Security Strategy</b>
    <div>
  
    <img src="../../../Images/security.webp" alt="security"  className='sec'/>
    </div>
    <div>

  
    <ol className="sec1">
    <b >When any vulnerability is identified, update the firmware as follows:</b>
<li>Vulnerabilities are identified by customers, users, etc.</li>
<li>A security related review meeting must be held immediately and the corresponding solution should be presented. The participants of the meeting must include project development manager, Technical Director and outside party who is responsible for firmware development. CVSSv2 will be used as a reference standard for assessing and prioritizing vulnerability/vulnerabilities.</li>
<li>Based on the proposed solution, the developer shall perform specific implementation/implementations.</li>
<li>Code will be reviewed. Reviewers should include security technology manager and project development.</li>
<li>Release of the updated firmware.</li>
<li>The QA team tests the updated firmware. If there are any problems in the updated firmware, go back to step three. If the testing is successful, move to step seven.</li>
<li>Updated code is merged into trunk branch.</li>
<li>The project manager notifies customers that they need to update the software and get confirmation from the customer/customers on the upgrade.</li>
<li>Perform OTA on the corresponding project.</li>
</ol>
    </div>
    
    </>
  )
}

export default Security