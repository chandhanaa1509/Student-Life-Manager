// Purpose:
// DTO returned to the Dashboard page.

package com.studentlifemanager.dto.dashboard;

import com.studentlifemanager.model.Assignment;
import com.studentlifemanager.model.Deadline;
import lombok.Data;

import java.util.List;

@Data
public class DashboardResponse {

    private long totalAssignments;

    private long totalInternships;

    private long totalResources;

    private long totalNotes;

    private long totalDeadlines;

    private List<Assignment> recentAssignments;

    private List<Deadline> upcomingDeadlines;
}


