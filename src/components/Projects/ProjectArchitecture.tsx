import { ArrowDown, ArrowRight } from 'lucide-react';
import { ProjectCaseStudy } from '@/data/portfolio';
import styles from './ProjectDetails.module.scss';

interface ProjectArchitectureProps {
  architecture: ProjectCaseStudy['architecture'];
}

export default function ProjectArchitecture({
  architecture,
}: ProjectArchitectureProps) {
  return (
    <div className={styles.architectureBlock}>
      <p className={styles.bodyCopy}>{architecture.overview}</p>

      {/* Clean AFTER DARK Architecture Flow Diagram */}
      <div className={styles.flowDiagram} aria-label="System architecture flow">
        <span className={styles.diagramLabel}>DATA &amp; COMPONENT FLOW</span>
        <div className={styles.flowSteps}>
          {architecture.flow.map((step, i) => (
            <div key={step} className={styles.flowStepWrap}>
              <div className={styles.flowNode}>
                <span className={styles.flowIndex}>0{i + 1}</span>
                <span className={styles.flowText}>{step}</span>
              </div>
              {i < architecture.flow.length - 1 && (
                <span className={styles.flowArrow} aria-hidden="true">
                  <ArrowRight size={14} className={styles.arrowDesktop} />
                  <ArrowDown size={14} className={styles.arrowMobile} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Layers */}
      <div className={styles.layersGrid}>
        {architecture.layers.map((item) => (
          <div key={item.layer} className={styles.layerCard}>
            <span className={styles.layerTitle}>{item.layer}</span>
            <span className={styles.layerStack}>{item.stack}</span>
            <p className={styles.layerDesc}>{item.responsibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
