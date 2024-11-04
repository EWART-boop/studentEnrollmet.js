const prompt = require("prompt-sync")({signint:true})
let DSA = [];
let PL = [];
let Networks = [];


function manageEnrollment() {
    let subjects = { A: DSA, B: PL, C: Networks };
    let selectedSubject = null;

    while (true) {
        
        let subjectChoice = prompt("Select a subject to enroll a student: \n(A) DSA\n(B) PL\n(C) Networks");
       
           
        if (subjectChoice in subjects) {
            selectedSubject = subjects[subjectChoice];
        } else {
            console.log("Invalid choice. Please select a valid subject.");
            continue;
        }

        while (true) {
            
            let operationChoice = prompt("Select an option:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

            if (operationChoice === 'A') {
                
                let studentName = prompt("Enter the name of the student to enroll: ");
                if (studentName) {
                    selectedSubject.push(studentName);
                    console.log(`Enrolled ${studentName} in ${subjectChoice === 'A' ? "DSA" : subjectChoice === 'B' ? "PL" : "Networks"}.`);
                } else {
                    console.log("No name entered. Please try again.");
                }

            } else if (operationChoice === 'B') {
                
                if (selectedSubject.length === 0) {
                    console.log("No students enrolled in this subject.");
                    continue;
                }

                console.log("Currently enrolled students:", selectedSubject.join(", "));
                let unenrollName = prompt("Enter the name of the student to unenroll:");
                
                
                const index = selectedSubject.indexOf(unenrollName);
                if (index !== -1) {
                    selectedSubject.splice(index, 1); 
                    console.log(`Unenrolled ${unenrollName} from ${subjectChoice === 'A' ? "DSA" : subjectChoice === 'B' ? "PL" : "Networks"}.`);
                } else {
                    console.log("Student not found in the enrolled list.");
                }

            } else if (operationChoice === 'C') {
                
                break; 

            } else if (operationChoice === 'D') {
                
                console.log("Enrolled students per subject:");
                console.log("DSA:", DSA.join(", ") || "No students enrolled.");
                console.log("PL:", PL.join(", ") || "No students enrolled.");
                console.log("Networks:", Networks.join(", ") || "No students enrolled.");
                return; 

            } else {
                console.log("Invalid choice. Please select a valid option.");
            }
        }
    }
}


manageEnrollment();
