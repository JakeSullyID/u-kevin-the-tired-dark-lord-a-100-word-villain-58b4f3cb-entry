// Lord Anselm speaks from the Hollow Keep as the final name waits in the iron ledger.
// The heavy stillness of the dark lord is conveyed entirely through quiet pauses and domestic distraction.
// Forty years of inked true names anchor his slow decay while the final queen remains untouched.
import fs from 'node:fs';
import path from 'node:path';

const monologue = "The hearth has been cold since the ravens stopped returning to our inner parapet. My thumb wears the throne's left arm smooth, year after quiet year. The war table pins haven't moved, and poor Thomas still slumps over his inkwell. Outside, the catapults rust while no one remembers why the siege started. Forty names inked into this iron ledger, one by one. Only the queen's name remains unwritten on the page for three long winters. Someone knocks now, though the kettle needs another drop of water first. Tell her I am coming down as soon as the ink finally dries.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), monologue);
