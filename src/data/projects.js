/**
 * GitHub’da gerçekten var olan repo adresleri (mlsarac hesabı).
 * StructAnalyzer için public repo yoksa profil linki kullanıldı — repo açınca githubUrl’i güncelle.
 */
export const projects = [
  {
    id: 'nids',
    title: 'Edge AI NIDS Gateway',
    description:
      'An AI-assisted smart home intrusion detection gateway that analyzes network traffic using Transformer-based models and flow-based features.',
    tags: ['Python', 'Transformers', 'Edge AI', 'IoT Security', 'Raspberry Pi'],
    githubUrl: 'https://github.com/mlsarac/iot-ids',
    details:
      'This capstone-oriented gateway targets edge deployment with Transformer-based traffic classification combined with flow-derived features for practical intrusion detection on constrained hardware.',
  },
  {
    id: 'ecu-sim',
    title: 'ECU Simulator & CAN Analytics',
    description:
      'A DBC-driven CAN simulator capable of automatic signal generation, decoding, traffic replay, and signal correlation analytics.',
    tags: ['Python', 'CAN', 'DBC', 'python-can', 'cantools'],
    githubUrl: 'https://github.com/mlsarac/ecuSimulatorandAnalyseProject',
    details:
      'Built around DBC definitions for structured signal simulation and analytics: synthetic frames, decode pipelines, replay workflows, and correlation views for validation and tooling.',
  },
  {
    id: 'structanalyzer',
    title: 'StructAnalyzer',
    description:
      'A static analysis tool for detecting EEPROM/NVM layout differences, struct signature changes, packing changes, and nested structure modifications.',
    tags: ['Python', 'C', 'libclang', 'EEPROM', 'Static Analysis'],
    githubUrl: 'https://github.com/mlsarac',
    details:
      'Uses Clang/libclang parsing to diff structural layouts and flag EEPROM-sensitive changes across firmware revisions.',
  },
  {
    id: 'cpu20',
    title: '20-bit CPU Design',
    description:
      'A custom-designed 20-bit processor architecture implemented in Logisim with ALU, register file, memory modules, control unit, and assembler support.',
    tags: ['Logisim', 'C', 'CPU Design', 'Digital Logic'],
    githubUrl: 'https://github.com/mlsarac/20-Bit-CPU-Design',
    details:
      'End-to-end digital design exercise spanning datapath, control, memory maps, and a lightweight assembler toolchain for the custom ISA.',
  },
];
