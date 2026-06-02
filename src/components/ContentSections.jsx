import { motion } from 'framer-motion'
import './ContentSections.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const ContentSections = () => {
  return (
    <div className="content">
      <motion.section
        className="section section--legacy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <div className="section-inner">
          <motion.div className="section-copy" variants={stagger}>
            <motion.span className="section-eyebrow" variants={fadeUp}>
              Casefile 01
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              City of Shadows
            </motion.h2>
            <motion.p className="section-body" variants={fadeUp}>
              The streets learned to whisper before he arrived. Each night is mapped,
              each siren logged, each signal tested against the storm. He does not
              patrol the city. He studies it, then strikes where fear thinks it is safe.
            </motion.p>
            <motion.div className="section-actions" variants={fadeUp}>
              <button className="st-btn st-btn--gold">Read the Casefile</button>
              <span className="section-note">No sirens. No spotlight.</span>
            </motion.div>
          </motion.div>

          <motion.div className="section-cards" variants={stagger}>
            <motion.div className="info-card" variants={fadeUp}>
              <div className="info-label">Signal Strength</div>
              <div className="info-value">92%</div>
              <div className="info-meta">Midnight frequency, low cloud cover</div>
            </motion.div>
            <motion.div className="info-card" variants={fadeUp}>
              <div className="info-label">Night Patrols</div>
              <div className="info-value">47</div>
              <div className="info-meta">Confirmed sightings this cycle</div>
            </motion.div>
            <motion.div className="info-card" variants={fadeUp}>
              <div className="info-label">Case Closure</div>
              <div className="info-value">17</div>
              <div className="info-meta">Open files under active watch</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="section section--rogues"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="section-inner section-inner--full">
          <motion.span className="section-eyebrow" variants={fadeUp}>
            Rogues Gallery
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            The City Fights Back
          </motion.h2>
          <motion.p className="section-body section-body--wide" variants={fadeUp}>
            Gotham is a living maze of schemes. Each adversary leaves a trail,
            each mask hides a motive. The only rule is the one carved into the
            concrete: survive the night.
          </motion.p>

          <motion.div className="rogue-grid" variants={stagger}>
            <motion.div className="rogue-card" variants={fadeUp}>
              <span className="rogue-role">The Riddler</span>
              <h3 className="rogue-name">Cipher of the Flood</h3>
              <p className="rogue-desc">
                A prophet of chaos, speaking in riddles and rains. He does not
                ask for answers. He demands confession.
              </p>
            </motion.div>
            <motion.div className="rogue-card" variants={fadeUp}>
              <span className="rogue-role">The Penguin</span>
              <h3 className="rogue-name">Kingpin of Ice</h3>
              <p className="rogue-desc">
                Business, blood, and borrowed loyalties. He smiles like a banker
                and moves like a blade in the dark.
              </p>
            </motion.div>
            <motion.div className="rogue-card" variants={fadeUp}>
              <span className="rogue-role">Selina Kyle</span>
              <h3 className="rogue-name">Cat in the Smoke</h3>
              <p className="rogue-desc">
                A survivor with her own code. She slips between the light and
                the dark, stealing truth as easily as diamonds.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="section section--signal"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <div className="signal-panel">
          <motion.span className="section-eyebrow" variants={fadeUp}>
            The Signal
          </motion.span>
          <motion.h2 className="signal-title" variants={fadeUp}>
            Call the Night
          </motion.h2>
          <motion.p className="signal-sub" variants={fadeUp}>
            When the city exhales, the skyline listens. A single flare cuts the fog
            and the mission begins. There is no promise of safety, only a vow to stand.
          </motion.p>
          <motion.div className="signal-actions" variants={fadeUp}>
            <button className="st-btn">Light the Signal</button>
            <button className="st-btn st-btn--gold">Join the Watch</button>
          </motion.div>
          <motion.div className="signal-strip" variants={fadeUp}>
            <span>Patrol Zone: Narrows</span>
            <span>Weather: Cold Rain</span>
            <span>Status: Active</span>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContentSections
